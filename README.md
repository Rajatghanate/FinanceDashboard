# Finance Dashboard & API Queue

A Vite + React implementation of the DodoPayments intern assignment. It recreates the dashboard UI from Figma and includes a Supabase Edge Function plus a front-end managed API queue.

## Getting Started

```bash
git clone <your-fork-url>
cd finance-dashboard
npm install
npm run dev
```

Visit http://localhost:8080 to open the dashboard.

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – generate a production build
- `npm run build:dev` – build with development-mode flags
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the repo

## Tech Stack

- React 18 + TypeScript
- Vite and SWC
- Tailwind CSS & shadcn/ui components
- **Backend:** Deno Deploy (Edge Function)
- React Query for queue state

## Project Highlights

- **Pixel-Perfect UI:** Dashboard cards, charts, and tables that mirror the provided Figma handoff
- **Smart Queue System:** Client-side request queue that proactively **throttles requests** (12s delay) to ensure the API rate limit is never exceeded.
- **Robust Backend:** Deno Edge Function with persistent rate limiting (Deno KV) and simulated processing delay.

## Deployment

Deploy the `dist/` output to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

The backend is deployed on Deno Deploy at: `https://real-weasel-22.deno.dev`

## Rate Limiting Implementation

The backend enforces a **18 requests per minute** rate limit per IP address, returning HTTP 429 when exceeded.

### Implementation Details

**Technology:** Deno Deploy + Deno KV

The rate limiting logic uses **Deno KV** (Key-Value store) to maintain a persistent count of requests across all serverless instances. This ensures that the rate limit is enforced globally.

**Logic:**
1.  Extracts IP from `x-forwarded-for` header.
2.  Checks Deno KV for request timestamps within the last 60 seconds.
3.  If count >= 18, returns **HTTP 429**.
4.  Otherwise, records the new request in KV with a 1-minute expiration.

**Example 429 Response:**
```json
{
  "error": "Rate limit exceeded"
}
```

### Testing

The backend is hosted on **Deno Deploy** at `https://real-weasel-22.deno.dev`.

**To Verify Rate Limiting:**

Since the limit is global and persistent, you can easily test it:

1.  **Using Postman:** Send 11 requests rapidly. The 11th will fail.
2.  **Using PowerShell:**
    ```powershell
    $url = "https://real-weasel-22.deno.dev"
    1..20 | ForEach-Object {
        Start-Job -ScriptBlock {
            param($url, $num)
            Invoke-WebRequest -Uri $url -Method POST -Body "{`"message`":`"test-$num`"}"
        } -ArgumentList $url, $_
    } | Wait-Job | Receive-Job
    ```
    You will see 10 successes (200 OK) and 2 failures (Rate limit exceeded).


## License

This repository is provided for educational and portfolio purposes. Adapt it for your own submissions as needed.

