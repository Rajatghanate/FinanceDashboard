import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Loader2, CheckCircle2, XCircle, Clock, Send } from "lucide-react";
import { useApiQueue } from "@/hooks/use-api-queue";
import { Badge } from "./ui/badge";

interface QueueItem {
  id: string;
  message: string;
  status: "pending" | "processing" | "completed" | "error";
  response?: string;
  error?: string;
  timestamp: string;
}

export function ApiQueueDemo() {
  const { queue, currentRequest, addToQueue, queueSize } = useApiQueue();
  const [items, setItems] = useState<QueueItem[]>([]);

  const handleAddRequest = () => {
    const id = `req-${Date.now()}`;
    const message = `Test message ${items.length + 1}`;
    
    const newItem: QueueItem = {
      id,
      message,
      status: "pending",
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setItems(prev => [newItem, ...prev]);
    
    addToQueue(message).then(response => {
      setItems(prev => prev.map(item => 
        item.id === id 
          ? { ...item, status: "completed", response: JSON.stringify(response, null, 2) }
          : item
      ));
    }).catch(error => {
      setItems(prev => prev.map(item => 
        item.id === id 
          ? { ...item, status: "error", error: error.message }
          : item
      ));
    });
  };

  const getStatusIcon = (status: QueueItem["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "processing":
        return <Loader2 className="h-4 w-4 text-primary animate-spin" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "error":
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: QueueItem["status"]) => {
    const variants: Record<QueueItem["status"], "default" | "destructive" | "secondary"> = {
      pending: "secondary",
      processing: "default",
      completed: "default",
      error: "destructive"
    };
    
    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              API Queue Demo
            </h3>
            <p className="text-sm text-muted-foreground">
              Click the button below to add requests to the queue. The system will automatically manage rate limiting.
            </p>
          </div>
          <Button onClick={handleAddRequest} className="gap-2">
            <Send className="h-4 w-4" />
            Send Request
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Clock className="h-4 w-4" />
              Queued Requests
            </div>
            <div className="text-2xl font-bold text-card-foreground">{queueSize}</div>
          </div>
          
          <div className="p-4 rounded-lg bg-primary-lighter">
            <div className="flex items-center gap-2 text-primary text-sm mb-1">
              <Loader2 className="h-4 w-4 animate-spin" />
              Current Request
            </div>
            <div className="text-2xl font-bold text-card-foreground">
              {currentRequest ? "Processing" : "Idle"}
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <CheckCircle2 className="h-4 w-4" />
              Completed
            </div>
            <div className="text-2xl font-bold text-card-foreground">
              {items.filter(i => i.status === "completed").length}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-md font-semibold text-card-foreground mb-4">Request History</h4>
        <div className="space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No requests yet. Click "Send Request" to start.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-border rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(item.status)}
                    <span className="text-sm font-medium text-card-foreground">
                      {item.message}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                    {getStatusBadge(item.status)}
                  </div>
                </div>
                
                {item.response && (
                  <div className="mt-2 p-3 bg-muted/50 rounded text-xs font-mono">
                    <div className="text-success mb-1">Response:</div>
                    <pre className="text-card-foreground whitespace-pre-wrap">{item.response}</pre>
                  </div>
                )}
                
                {item.error && (
                  <div className="mt-2 p-3 bg-destructive/10 rounded text-xs">
                    <div className="text-destructive font-semibold mb-1">Error:</div>
                    <div className="text-destructive">{item.error}</div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}