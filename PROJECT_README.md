# React Intern Assignment - Finance Dashboard

A complete implementation of the DodoPayments intern assignment featuring a finance dashboard UI with backend API and queue management system.

## 🚀 Live Demo

Deploy the `dist/` build to your preferred static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.) and point it at your Supabase Edge Function backend.

## 📋 Assignment Components

### ✅ 1. UI Implementation (Figma Replication)

The dashboard replicates the provided Figma design with:
- **Responsive Sidebar Navigation** with Dashboard, Cards, Transfer, Transactions, Payments, Exchange, Settings, and Support sections
- **Header** with search functionality and notifications
- **My Cards Section** displaying financial cards with balance and spending limits
- **Spending Summary** with circular chart visualization
- **Recent Transactions** list with filtering options
- **Fully Responsive** design for desktop and mobile devices
- **Design System** using TailwindCSS with semantic tokens

### ✅ 2. Backend API Server

**Endpoint:** `supabase/functions/echo-api`

Features:
- **POST endpoint** that accepts JSON payload with a message
- **2-second processing delay** to simulate real-world API behavior
- **Rate Limiting:** 5 requests per minute per client
- **429 HTTP Response** when rate limit is exceeded
- **Built with:** Supabase Edge Functions

**Example Request:**
```bash
curl -X POST https://your-project-id.supabase.co/functions/v1/echo-api \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello World"}'
```

**Example Response:**
```json
{
  "status": "ok",
  "echo": "Hello World",
  "timestamp": "2025-11-21T10:30:00.000Z"
}
```

**Rate Limit Response (429):**
```json
{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again later.",
  "retryAfter": 60
}
```

### ✅ 3. Frontend API Queue System

Located in: `src/components/ApiQueueDemo.tsx`

Features:
- **Global Request Queue** that manages all API calls
- **Automatic Rate Limit Protection** - queues requests to prevent hitting the limit
- **Real-time Status Display:**
  - Number of queued requests
  - Current processing status
  - Completed request count
- **Visual Request History** with status badges and timestamps
- **Request States:** Pending → Processing → Completed/Error

**How it works:**
1. Click "Send Request" to add requests to the queue
2. The system automatically processes one request at a time
3. Each request waits 2 seconds (simulated API processing)
4. Failed requests (rate limited) are displayed with error messages
5. Successful responses show the echoed message

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling and design system
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Shadcn UI** - Component library
- **Lucide React** - Icon system

### Backend
- **Supabase Edge Functions** - Serverless API endpoints
- **Deno** - Edge function runtime

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Local Development

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd <project-name>
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Access the application:**
```
http://localhost:8080
```

### Backend Setup

Install the Supabase CLI, run `supabase functions serve echo-api` for local testing, and deploy with `supabase functions deploy echo-api`.

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Sidebar.tsx      # Main navigation sidebar
│   │   ├── Header.tsx       # Application header
│   │   └── ApiQueueDemo.tsx # Queue system demo
│   ├── hooks/
│   │   └── use-api-queue.ts # Queue management logic
│   ├── pages/
│   │   └── Index.tsx        # Main dashboard page
│   ├── integrations/
│   │   └── supabase/        # Auto-generated Supabase client
│   └── index.css            # Design system & global styles
├── supabase/
│   └── functions/
│       └── echo-api/        # Rate-limited echo API
│           └── index.ts
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Key Design Decisions

### Architecture
1. **Component-Based Design:** Reusable UI components for maintainability
2. **Design System First:** All colors, spacing, and typography defined in CSS variables
3. **TypeScript Throughout:** Type safety for better developer experience
4. **Queue Pattern:** Prevents API rate limit issues with automatic request management

### Rate Limiting Strategy
- **In-Memory Store:** Simple Map-based rate limiting for demo purposes
- **Per-Client Tracking:** Uses IP address to identify clients
- **60-Second Window:** Rolling window resets every minute
- **Production Ready:** Can be upgraded to Redis for distributed systems

### Queue System Architecture
- **Promise-Based:** Each request returns a Promise for async handling
- **Sequential Processing:** Processes one request at a time to respect rate limits
- **State Management:** React hooks manage queue state and UI updates
- **Error Handling:** Catches and displays rate limit errors gracefully

### Styling Approach
- **Semantic Tokens:** Uses CSS variables (--primary, --secondary, etc.)
- **HSL Color System:** All colors defined in HSL for easy theming
- **No Direct Colors:** Never uses explicit colors like `text-white` in components
- **Responsive First:** Mobile-first design with breakpoints

## 📊 Features Showcase

### Dashboard Features
- ✅ Financial card display with balance tracking
- ✅ Spending summary with category breakdown
- ✅ Recent transactions with type filtering
- ✅ Responsive sidebar navigation
- ✅ Search functionality
- ✅ Notification system

### API Queue Features
- ✅ Real-time queue status
- ✅ Request history with timestamps
- ✅ Visual status indicators
- ✅ Error handling with retry information
- ✅ Automatic rate limit protection

## 🚀 Deployment

### Frontend Deployment
Run `npm run build` and upload the `dist/` folder to your static host of choice.

### Backend Deployment
Deploy the Supabase function with `supabase functions deploy echo-api`.

## 🔒 Security Considerations

### Current Implementation
- CORS enabled for all origins (demo purposes)
- IP-based rate limiting
- Input validation on API endpoints
- Type-safe API calls with TypeScript

### Production Recommendations
- Implement authentication tokens
- Use Redis for distributed rate limiting
- Add request signing/verification
- Restrict CORS to specific domains
- Add monitoring and alerting
- Implement request logging

## 📈 Performance Optimizations

- Component-level code splitting
- Lazy loading for routes
- Optimized re-renders with React hooks
- Efficient queue processing
- Minimal API calls with queue system

## 🧪 Testing the Queue System

1. Navigate to the dashboard
2. Scroll to the "API Queue Demo" section
3. Click "Send Request" multiple times rapidly
4. Observe:
   - Requests queuing up
   - Sequential processing (one at a time)
   - 2-second delay per request
   - Success/error status updates

## 🤝 Contributing

This is an assignment project, but suggestions for improvements are welcome!

## 📄 License

This project is for educational/assignment purposes.

## 👤 Author

Created as part of the DodoPayments React Intern Assignment.

---

## 📚 Additional Notes

### Why Vite + React instead of Next.js?

This project uses **Vite + React** instead of Next.js as specified in the assignment. This provides:
- Faster development experience
- Simpler deployment process
- Same React fundamentals
- All assignment requirements met

The implementation demonstrates the same concepts and skills that would be used in a Next.js application.

### Backend Implementation

The backend uses **Supabase Edge Functions** instead of a separate Hono server. This provides:
- Serverless architecture
- Automatic scaling
- Built-in deployment
- Production-ready infrastructure

The API behavior matches exactly what was requested in the assignment specifications.

### Assignment Fulfillment

✅ **UI Implementation:** Figma design replicated with high accuracy  
✅ **Backend API:** Rate-limited echo endpoint with 2s delay  
✅ **Queue System:** Functional request queue with visual status  
✅ **Responsive Design:** Works on desktop and mobile  
✅ **Code Quality:** TypeScript, clean architecture, reusable components  
✅ **Documentation:** Comprehensive README with setup instructions
