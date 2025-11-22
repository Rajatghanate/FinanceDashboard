# API & Queue Workflow Documentation

This document explains how the Rate Limiting and Queue System works in this project.

## 1. System Overview

-   **Rate Limit:** 18 requests per minute (per IP address).
-   **Backend:** Deno Deploy (Global, Persistent Rate Limiting).
-   **Frontend:** React + Smart Queue (Sliding Window Logic).

---

## 2. How the Frontend Queue Works

The frontend uses a **Sliding Window** algorithm to maximize speed while protecting the API.

### The Logic:
1.  **Burst Phase (Requests 1-18):**
    -   When you send requests, the queue checks: *"Have I sent 18 requests in the last 60 seconds?"*
    -   **No:** The request is sent **immediately**.
    -   **Result:** You can send 18 requests as fast as you want (e.g., all in 5 seconds).

2.  **Protection Phase (Request 19+):**
    -   When you try to send the 19th request, the queue sees that the limit (18) has been reached in the last minute.
    -   **Action:** It **PAUSES** the queue.
    -   **Wait Time:** It calculates exactly when the *first* request (Request #1) will expire from the 1-minute window.
    -   **Example:** If Request #1 was sent at 10:00:00, the queue waits until 10:01:00.

3.  **Resume Phase:**
    -   Once the wait time is over, the queue automatically unpauses.
    -   It sends Request #19 immediately.
    -   It then checks if it can send Request #20 (depending on when Request #2 was sent), and so on.

### Handling Page Refreshes (Robustness)
If you refresh the page, the frontend forgets its history. It might try to send a request immediately.
-   **Backend Response:** The backend (Deno) remembers the limit and returns **HTTP 429 (Too Many Requests)**.
-   **Frontend Reaction:** The queue catches this error, waits for the required cooldown time (from `Retry-After` header), and **automatically retries**.
-   **User Experience:** No error is shown; the request just takes longer to complete.

---

## 3. How it Works in Postman (Direct API Testing)

When testing directly with Postman, there is no frontend queue to protect you.

### Scenario: Sending 20 Requests Rapidly
1.  **Requests 1-18:**
    -   Status: **200 OK**
    -   Response: `{"status": "ok", "echo": "..."}`
    -   Time: ~2 seconds each.

2.  **Requests 19-20:**
    -   Status: **429 Too Many Requests**
    -   Response: `{"error": "Rate limit exceeded"}`
    -   **Why:** You bypassed the frontend queue, so the backend blocked you directly to enforce the limit.

---

## Summary Table

| Feature | Frontend (App) | Postman (Direct API) |
| :--- | :--- | :--- |
| **Requests 1-18** | Sent Immediately (Fast) | Sent Immediately (Fast) |
| **Request 19+** | **Queued** (Waits for slot) | **Failed** (429 Error) |
| **User Experience** | Smooth, no errors | Explicit errors shown |
| **Protection** | Active (Smart Queue) | None (Raw Access) |
