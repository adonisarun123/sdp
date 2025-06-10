import type { Metadata } from "next";
import { Inter, Merriweather, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "ScubaDiversPlanet | PADI Courses & Diving Tours Worldwide",
  description: "Discover world-class PADI courses, diving tours, and marine conservation programs. Book certified dive centers globally with expert guidance and unforgettable underwater experiences.",
  keywords: "scuba diving, PADI courses, diving tours, dive centers, marine conservation, underwater adventures",
  authors: [{ name: "ScubaDiversPlanet Team" }],
  creator: "ScubaDiversPlanet",
  publisher: "ScubaDiversPlanet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://scubadiversplanet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ScubaDiversPlanet | PADI Courses & Diving Tours Worldwide",
    description: "Discover world-class PADI courses, diving tours, and marine conservation programs. Book certified dive centers globally with expert guidance and unforgettable underwater experiences.",
    url: "/",
    siteName: "ScubaDiversPlanet",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScubaDiversPlanet - Underwater Adventures Await",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScubaDiversPlanet | PADI Courses & Diving Tours Worldwide",
    description: "Discover world-class PADI courses, diving tours, and marine conservation programs.",
    images: ["/images/twitter-image.jpg"],
    creator: "@scubadiversplanet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} ${robotoSlab.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Resource Preloading for Critical Resources */}
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80&auto=format"
          as="image"
          type="image/jpeg"
        />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to Critical Third-parties */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Critical CSS - Inline for immediate render */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical above-the-fold styles */
              *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
              ::before,::after{--tw-content:''}
              html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}
              body{margin:0;line-height:inherit}
              h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
              a{color:inherit;text-decoration:inherit}
              button,input{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
              button{text-transform:none}
              
              /* Critical layout classes */
              .fixed{position:fixed}
              .relative{position:relative}
              .absolute{position:absolute}
              .inset-0{inset:0px}
              .top-0{top:0px}
              .z-50{z-index:50}
              .z-10{z-index:10}
              .flex{display:flex}
              .min-h-screen{min-height:100vh}
              .h-20{height:5rem}
              .w-full{width:100%}
              .items-center{align-items:center}
              .justify-between{justify-content:space-between}
              .justify-center{justify-content:center}
              .overflow-hidden{overflow:hidden}
              .bg-white{background-color:rgb(255 255 255)}
              .px-4{padding-left:1rem;padding-right:1rem}
              .pt-16{padding-top:4rem}
              .text-center{text-align:center}
              .text-white{color:rgb(255 255 255)}
              .font-bold{font-weight:700}
              .leading-tight{line-height:1.25}
              .transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
              
              @media (min-width: 640px) {
                .sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
              }
              
              @media (min-width: 1024px) {
                .lg\\:px-8{padding-left:2rem;padding-right:2rem}
                .lg\\:pt-20{padding-top:5rem}
                .lg\\:text-6xl{font-size:3.75rem;line-height:1}
              }
              
              /* Hero section critical styles */
              .text-4xl{font-size:2.25rem;line-height:2.5rem}
              .md\\:text-5xl{font-size:3rem;line-height:1}
              .object-cover{object-fit:cover}
              .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
              .duration-1000{transition-duration:1000ms}
              .opacity-0{opacity:0}
              .opacity-100{opacity:1}
              
              /* Font loading optimization */
              .font-sans{font-family:var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
              .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen">
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
