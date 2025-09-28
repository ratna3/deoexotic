import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Deo Exotic Attar & Perfume - 100% Natural Oil-Based Perfumes",
    template: "%s | Deo Exotic"
  },
  description: "Experience the essence of nature with our 100% chemical-free attars and perfumes. No parabens, no chemicals, no side effects. Pure luxury, naturally crafted.",
  keywords: [
    "natural perfume",
    "attar",
    "oil-based perfume", 
    "chemical-free fragrance",
    "no parabens",
    "luxury perfume",
    "organic fragrance",
    "essential oils"
  ],
  authors: [{ name: "Deo Exotic" }],
  creator: "Deo Exotic Attar & Perfume",
  publisher: "Deo Exotic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deoexotic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deoexotic.com',
    siteName: 'Deo Exotic Attar & Perfume',
    title: 'Deo Exotic - 100% Natural Oil-Based Perfumes',
    description: 'Experience the essence of nature with our 100% chemical-free attars and perfumes. No parabens, no chemicals, no side effects.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deo Exotic Natural Perfumes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deo Exotic - 100% Natural Oil-Based Perfumes',
    description: 'Experience the essence of nature with our 100% chemical-free attars and perfumes. No parabens, no chemicals, no side effects.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
