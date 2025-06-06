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
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
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
