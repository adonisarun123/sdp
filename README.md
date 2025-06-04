# 🌊 ScubaDiversPlanet

A world-class, responsive scuba diving platform built with Next.js 14, Supabase, and Tailwind CSS. Discover PADI courses, diving tours, marine conservation programs, and connect with the global diving community.

![ScubaDiversPlanet](https://via.placeholder.com/1200x600/1BA3C6/FFFFFF?text=ScubaDiversPlanet)

## ✨ Features

### 🏊‍♂️ Core Functionality
- **PADI Course Booking** - Browse and book certified diving courses worldwide
- **Dive Tour Reservations** - Explore amazing underwater destinations
- **Marine Conservation Programs** - Join meaningful ocean protection initiatives
- **Dive Industry Jobs** - Find your dream diving career
- **Community Features** - Forums, ideas board, and networking

### 🎨 Design & UX
- **Responsive Design** - Perfect on all devices from mobile to desktop
- **Beautiful Animations** - Smooth Framer Motion animations throughout
- **Ocean-Inspired Theme** - Custom color palette and design system
- **Accessible** - WCAG compliant with keyboard navigation
- **Fast Performance** - Optimized images, fonts, and code splitting

### 🔧 Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Supabase** for backend, database, and authentication
- **Tailwind CSS** with custom design system
- **Responsive Images** with Next.js Image optimization
- **SEO Optimized** with proper meta tags and structured data
- **PWA Ready** for mobile app-like experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier available)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd scubadiversplanet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration (Required)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Supabase Configuration

1. **Create a new Supabase project** at [supabase.com](https://supabase.com)

2. **Run the database schema** (found in the DEVELOPMENT-GUIDE.md):
   ```sql
   -- Copy and paste the schema from the development guide
   -- This creates all necessary tables for destinations, marine life, etc.
   ```

3. **Enable Row Level Security (RLS)**:
   ```sql
   -- Copy and paste the RLS policies from the development guide
   ```

4. **Get your credentials**:
   - Go to Settings > API
   - Copy the Project URL and anon key
   - Add them to your `.env.local` file

## 🎨 Brand Colors

The ScubaDiversPlanet brand uses an ocean-inspired color palette:

- **Primary (Deep Ocean Blue)**: `#0B2F5C`
- **Secondary (Coral Reef Orange)**: `#FF6B35`
- **Accent (Aqua Turquoise)**: `#1BA3C6`
- **Conservation (Seafoam Green)**: `#2ECC71`
- **Sand (Golden Sand)**: `#F4D03F`

## 📁 Project Structure

```
scubadiversplanet/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with navigation
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable React components
│   │   ├── home/               # Homepage sections
│   │   └── layout/             # Navigation components
│   ├── contexts/               # React contexts (Auth, etc.)
│   └── lib/                    # Utility functions and configs
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
└── next.config.ts              # Next.js configuration
```

## 🧩 Key Components

### Header
- Responsive navigation with mobile menu
- Search functionality
- User authentication dropdown
- Scroll-based styling

### Hero Section
- Image slideshow with animations
- Search bar with live suggestions
- Call-to-action buttons
- Statistics showcase

### Featured Destinations
- Grid layout with hover effects
- Difficulty indicators
- Booking integration

### Conservation Highlight
- Environmental focus
- Volunteer opportunities
- Impact metrics

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Testing (when implemented)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🌍 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

Create a `.env.local` file with these variables:

```env
# Required for basic functionality
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional - for full functionality
STRIPE_SECRET_KEY=your_stripe_key              # Payments
CLOUDINARY_CLOUD_NAME=your_cloudinary_name     # Image uploads
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id       # Analytics
```

## 🎯 Roadmap

### Phase 1 - Core Features ✅
- [x] Responsive homepage
- [x] Navigation and layout
- [x] Hero section with animations
- [x] Featured destinations preview
- [x] Conservation highlights

### Phase 2 - Content Pages (Next)
- [ ] Destinations catalog with filters
- [ ] Marine life species database
- [ ] Conservation project listings
- [ ] Job board functionality
- [ ] Community features

### Phase 3 - Advanced Features
- [ ] User authentication and profiles
- [ ] Booking system integration
- [ ] Payment processing
- [ ] Real-time chat
- [ ] Mobile app (React Native)

## 🚢 Deployment Status

**Latest Build:** All Supabase and Tailwind CSS compatibility issues resolved ✅  
**Vercel Ready:** Optimized for production deployment 🚀

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

Need help? Check out our:
- [Documentation](./DEVELOPMENT-GUIDE.md)
- [FAQ](#)
- [Community Discord](#)

## 🌟 Acknowledgments

- **PADI** for diving education standards
- **Marine Conservation Organizations** for ocean protection initiatives
- **Unsplash** for beautiful underwater photography
- **The diving community** for inspiration and feedback

---

**Dive Into Adventure** 🤿 - Built with ❤️ for the ocean

[Website](https://scubadiversplanet.com) • [Twitter](https://twitter.com/scubadiversplanet) • [Instagram](https://instagram.com/scubadiversplanet)
