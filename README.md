# Ezy Smart Shop 🛍️

A professional, scalable e-commerce website starter built with **Next.js 15** and **TypeScript**. Designed for Vercel deployment with AI-powered features, Stripe payments, and a full admin dashboard.

---

## ✨ Features

### 🛒 Core E-Commerce
- **Home page** — Hero section, featured products, category showcase, testimonials
- **Product catalog** — Listing, search, category filtering, sorting
- **Product details** — Dynamic routing (`/products/[slug]`), gallery, add to cart
- **Shopping cart** — Persistent via Zustand + localStorage
- **Checkout flow** — 3-step: Shipping → Payment → Review
- **Order history** — View past orders with status tracking

### 🔐 Authentication
- NextAuth.js with Credentials provider (email/password placeholder)
- Google OAuth placeholder
- Session-based auth throughout

### 🤖 AI Features (Placeholders — Ready for Integration)
- **Product recommendations** — Personalized based on user behaviour
- **AI-powered search** — Semantic search placeholder (`/api/ai/search`)
- **Support chatbot** — Floating chat widget, ready for OpenAI/Botpress
- **Personalised offers** — Context-aware discount banners

### 🏠 Admin Dashboard
- Stats overview (products, orders, users, revenue)
- Products management table (add, edit, delete)
- Orders management (status updates)
- Users management (role assignment)

### 💳 Stripe Integration (Placeholder)
- Payment intent creation via `/api/checkout`
- Stripe publishable key wired up via env vars
- Ready to drop in `@stripe/react-stripe-js` Elements

### 📱 Responsive Design
- Mobile-first Tailwind CSS
- Clean, modern UI with consistent blue colour scheme
- Accessible components with proper ARIA attributes

---

## 🗂 Project Structure

```
frontend/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Home page
│   │   ├── layout.tsx           # Root layout (Navbar, Footer)
│   │   ├── globals.css          # Global Tailwind styles
│   │   ├── products/
│   │   │   ├── page.tsx         # Product catalog with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Product detail page
│   │   ├── cart/
│   │   │   └── page.tsx         # Cart view
│   │   ├── checkout/
│   │   │   ├── page.tsx         # 3-step checkout
│   │   │   └── success/
│   │   │       └── page.tsx     # Order confirmation
│   │   ├── orders/
│   │   │   └── page.tsx         # Order history
│   │   ├── admin/
│   │   │   ├── page.tsx         # Dashboard overview
│   │   │   ├── products/        # Product management
│   │   │   ├── orders/          # Order management
│   │   │   └── users/           # User management
│   │   ├── auth/
│   │   │   ├── signin/          # Sign-in page
│   │   │   └── signup/          # Registration page
│   │   └── api/
│   │       ├── auth/[...nextauth]/  # NextAuth endpoint
│   │       ├── products/            # Products CRUD
│   │       ├── orders/              # Orders CRUD
│   │       ├── users/               # Users API
│   │       ├── checkout/            # Stripe payment intent
│   │       └── ai/
│   │           ├── recommendations/ # AI recommendations
│   │           └── search/          # AI-powered search
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartSidebar.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── AIFeatures.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── SessionProviderWrapper.tsx
│   ├── lib/
│   │   ├── data.ts              # Sample products, categories, orders
│   │   ├── store.ts             # Zustand cart store
│   │   └── utils.ts             # Utility functions
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── .env.example                 # Environment variable template
├── next.config.ts               # Next.js configuration
└── tailwind.config.ts           # Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **npm** / **pnpm** / **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/fathahmtk/ezy-smart-shop.git
cd ezy-smart-shop/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MongoDB connection string |
| `NEXTAUTH_URL` | Your app URL (e.g. `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Random secret (generate with `openssl rand -base64 32`) |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `OPENAI_API_KEY` | OpenAI API key for AI features |

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🔧 Development

### Available Scripts

```bash
npm run dev        # Start development server (Turbopack)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Adding Real Database Support

The app currently uses in-memory sample data in `src/lib/data.ts`. To connect a real database:

1. **MongoDB + Mongoose** (recommended):
   ```bash
   npm install mongoose
   ```
   Create `src/lib/mongodb.ts` with your connection logic and replace data imports in API routes.

2. **PostgreSQL + Prisma**:
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

### Enabling Stripe Payments

1. Install Stripe Elements:
   ```bash
   npm install @stripe/react-stripe-js
   ```
2. In `src/app/checkout/page.tsx`, wrap the payment step with `<Elements stripe={stripePromise}>`.
3. The API route at `/api/checkout` already creates a `PaymentIntent` — just add your `STRIPE_SECRET_KEY`.

### Enabling Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → Create OAuth 2.0 credentials
2. Set redirect URI: `http://localhost:3000/api/auth/callback/google`
3. Add your credentials to `.env.local`

### Enabling AI Features

Replace the placeholder responses in:
- `src/app/api/ai/recommendations/route.ts` — Integrate OpenAI Embeddings or a recommendation engine
- `src/app/api/ai/search/route.ts` — Integrate Algolia, MeiliSearch, or OpenAI semantic search
- `src/components/AIFeatures.tsx` — Connect the chatbot to OpenAI Chat Completions API

---

## ☁️ Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fathahmtk/ezy-smart-shop)

### Option 2: Manual Deployment

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) → **New Project**
   - Import your GitHub repository
   - Set **Root Directory** to `frontend`
   - Click **Deploy**

3. **Configure Environment Variables**:
   - In your Vercel project → **Settings** → **Environment Variables**
   - Add all variables from `.env.example` with production values
   - Set `NEXTAUTH_URL` to your Vercel deployment URL

4. **Redeploy** for the env vars to take effect.

### Vercel Configuration Notes
- The app uses Next.js App Router — fully compatible with Vercel Edge Functions
- API routes are automatically deployed as serverless functions
- Images from external domains are configured in `next.config.ts`

---

## 🔒 Security Checklist Before Production

- [ ] Replace `NEXTAUTH_SECRET` with a real secret (`openssl rand -base64 32`)
- [ ] Add authentication middleware to protect `/admin/*` routes
- [ ] Add session checks in all API routes (marked with `// TODO: verify session`)
- [ ] Validate and sanitise all user inputs in API routes
- [ ] Use HTTPS in production (`NEXTAUTH_URL=https://your-domain.com`)
- [ ] Set up CORS properly for your API routes
- [ ] Add rate limiting to prevent abuse
- [ ] Store secrets in Vercel/environment — never commit `.env.local`

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Authentication | NextAuth.js v4 |
| Payments | Stripe (placeholder) |
| Icons | Lucide React |
| AI Integration | OpenAI (placeholder) |
| Deployment | Vercel |

---

## 📝 Extending the App

### Add a New Page
Create `src/app/your-page/page.tsx` — Next.js App Router handles routing automatically.

### Add a New API Route
Create `src/app/api/your-endpoint/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello!' });
}
```

### Add a New Product Category
Edit `src/lib/data.ts` — add to the `CATEGORIES` array and add products with the new `category` value.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 Licence

MIT — see [LICENSE](LICENSE) for details.

---

*Built with ❤️ for Ezy Smart Shop. Ready for production with real database and API keys.*
