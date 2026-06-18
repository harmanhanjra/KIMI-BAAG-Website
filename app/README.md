# BAAG - Rooted in Punjab. Built for the World.

A premium direct-to-consumer fashion e-commerce website for BAAG, a luxury Punjabi streetwear brand. Built with React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **19 Pages**: Homepage, Shop, Collection, Product Detail, About, Story, Lookbook, Size Guide, Contact, FAQ, Shipping, Returns, Privacy Policy, Terms, Track Order, Cart, Wishlist, Search, 404
- **Full E-commerce Frontend**: Functional cart with localStorage persistence, wishlist, product filters, sorting, and search
- **Premium Design**: Luxury editorial aesthetic with warm cream, burgundy, and washed black palette
- **Cultural Authenticity**: Accurate Gurmukhi typography and meaningful Punjabi cultural references
- **SEO Optimized**: Meta tags, schema markup, semantic HTML, and accessibility features
- **Responsive**: Mobile-first design that works from 320px to large desktop displays
- **Animations**: Subtle Framer Motion animations with reduced-motion support

## Quick Start

```bash
npm install
npm run dev
```

The development server will start at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready for deployment.

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify.

## Customization Guide

### Replace Placeholder Content

Before launching, replace the following placeholders throughout the codebase:

| Placeholder | Location | What to Replace With |
|-------------|----------|---------------------|
| `[YOUR_EMAIL]` | `src/pages/ContactPage.tsx`, `src/data/faq.ts` | Your customer service email |
| `[YOUR_WHATSAPP_NUMBER]` | `src/components/layout/WhatsAppButton.tsx`, `src/pages/ContactPage.tsx`, `src/data/faq.ts` | Your WhatsApp business number (with country code, no +) |
| `[YOUR_BUSINESS_ADDRESS]` | `src/pages/ContactPage.tsx` | Your business address |

### Product Images

Replace the placeholder images in `public/images/` with your actual product photography:

- `public/images/hero/baag-drop-001.jpg` - Main hero campaign image
- `public/images/products/*-front.jpg` - Product front views
- `public/images/products/*-back.jpg` - Product back views
- `public/images/lookbook/*.jpg` - Lookbook campaign images
- `public/images/story/*.jpg` - Brand story images
- `public/images/community/*.jpg` - Community/social proof images

See `IMAGE-GUIDE.md` for detailed image specifications.

### Product Data

Edit `src/data/products.ts` to update:
- Product names, prices, descriptions
- Inventory levels
- Sizes available
- Images paths

### Color Palette

The brand colors are defined in:
- `tailwind.config.js` - extend the theme
- `src/index.css` - CSS custom properties
- Individual component files for specific usage

Primary colors:
- Deep Wine Burgundy: `#541F2B`
- Washed Black: `#111111`
- Warm Cream: `#F1E9DC`
- Antique Gold: `#B39152`

## Shopify Integration Roadmap

The codebase is architected for easy Shopify Storefront API integration:

### 1. Cart & Checkout
**File**: `src/store/cartStore.ts`
- The cart state management is already built with Zustand
- **Integration Point**: Replace the `// SHOPIFY CHECKOUT INTEGRATION POINT` comments in:
  - `src/components/layout/CartDrawer.tsx`
  - `src/pages/ProductPage.tsx`
  - `src/pages/CartPage.tsx`
- Use Shopify's Storefront API to create a checkout URL and redirect

### 2. Product Data
**File**: `src/data/products.ts`
- Replace the static product data with fetches from Shopify Storefront API
- Use the `getProductBySlug`, `getRelatedProducts` functions as wrappers for API calls

### 3. Inventory
**File**: `src/data/products.ts` (inventory field)
- Connect to Shopify's inventory management for real-time stock levels

### 4. Order Tracking
**File**: `src/pages/TrackOrderPage.tsx`
- Integrate with Shopify's Order API for real tracking data

### 5. Contact Form
**File**: `src/pages/ContactPage.tsx`
- Connect to your email service or Shopify customer service tools

### 6. Newsletter
**File**: `src/components/home/Newsletter.tsx`
- Integrate with Shopify Email, Klaviyo, or your preferred email marketing service

### Environment Variables

Create a `.env` file from `.env.example` and add your Shopify credentials:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_API_TOKEN=your-storefront-api-token
```

## Project Structure

```
├── public/
│   └── images/           # Product, hero, and campaign images
├── src/
│   ├── components/
│   │   ├── home/         # Homepage sections
│   │   ├── layout/       # Header, Footer, CartDrawer, etc.
│   │   ├── ui/           # ProductCard, Breadcrumbs, SEO
│   │   └── SEO.tsx       # SEO meta tag management
│   ├── data/             # Products, collections, FAQ, navigation
│   ├── lib/              # Utility functions (format, SEO)
│   ├── pages/            # All page components
│   ├── store/            # Zustand stores (cart, wishlist)
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main app with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Performance

- Images should be optimized WebP format where possible
- Lazy loading implemented for below-the-fold images
- Code splitting via React Router
- CSS optimized with Tailwind's purge feature

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Sufficient color contrast ratios

## License

All rights reserved. BAAG 2026.
