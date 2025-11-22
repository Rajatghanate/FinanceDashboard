import { useState, useEffect, useRef } from "react";

interface QueuedRequest {
  message: string;
  resolve: (value: any) => void;
  reject: (reason: any) => void;
}

const RATE_LIMIT = 18;
const RATE_WINDOW_MS = 60000; // 1 minute

export function useApiQueue() {
  const [queue, setQueue] = useState<QueuedRequest[]>([]);
  const [currentRequest, setCurrentRequest] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const queueRef = useRef<QueuedRequest[]>([]);
  const requestTimestamps = useRef<number[]>([]);

  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  useEffect(() => {
    if (!isProcessing && queue.length > 0) {
      processNext();
    }
  }, [queue, isProcessing]);

  const processNext = async () => {
    if (isProcessing || queueRef.current.length === 0) return;

    const now = Date.now();
    // Filter out timestamps older than the window
    requestTimestamps.current = requestTimestamps.current.filter(t => now - t < RATE_WINDOW_MS);

    // Client-side check (only works if page hasn't been refreshed)
    if (requestTimestamps.current.length >= RATE_LIMIT) {
      const oldest = requestTimestamps.current[0];
      const waitTime = (oldest + RATE_WINDOW_MS) - now + 100;
      console.log(`Client-side limit reached. Waiting ${waitTime}ms`);
      setTimeout(() => processNext(), waitTime);
      return;
    }

    setIsProcessing(true);
    const nextRequest = queueRef.current[0];
    setCurrentRequest(nextRequest.message);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://real-weasel-22.deno.dev';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: nextRequest.message })
      });

      // Handle 429 (Rate Limit Exceeded) from Backend
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 1000; // Default 1s if header missing

        console.log(`Hit backend rate limit (429). Retrying in ${waitTime}ms...`);

        setTimeout(() => {
          setIsProcessing(false); // Allow processNext to run again
        }, waitTime);
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Request failed');
      }

      // Success!
      requestTimestamps.current.push(Date.now());
      nextRequest.resolve(data);

      // Remove from queue only on success
      setQueue(prev => prev.slice(1));
      setCurrentRequest(null);
      setIsProcessing(false);

    } catch (error: any) {
      // Only reject on non-429 errors (network error, 500, etc.)
      nextRequest.reject(error);
      setQueue(prev => prev.slice(1));
      setCurrentRequest(null);
      setIsProcessing(false);
    }
  };

  const addToQueue = (message: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const request: QueuedRequest = { message, resolve, reject };
      setQueue(prev => [...prev, request]);
    });
  };

  return {
    queue,
    currentRequest,
    addToQueue,
    queueSize: queue.length,
  };
}