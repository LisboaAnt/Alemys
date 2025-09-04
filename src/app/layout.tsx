import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const eastmanRoman = localFont({
  src: "../../public/fonts/EastmanRomanTrial-Regular.otf",
  variable: '--font-eastman-roman',
  display: 'swap',
});
//Ola mundo
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alemsys",
    template: "Alemsys"
  },
  applicationName: "Alemsys",
  description: "Alemsys oferece serviços de desenvolvimento web, aplicações móveis, sistemas personalizados e mentoria em tecnologia. Transforme sua ideia em realidade digital.",
  keywords: [
    "desenvolvimento web",
    "aplicações móveis", 
    "sistemas personalizados",
    "mentoria em tecnologia",
    "programação",
    "software",
    "tecnologia",
    "startup",
    "empresa digital",
    "consultoria TI"
  ],
  authors: [{ name: "Alemsys Team" }],
  creator: "Alemsys",
  publisher: "Alemsys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.alemsys.digital'),
  alternates: {
    canonical: '/',
    languages: {
      'pt': '/pt',
      'en': '/en',
      'es': '/es',
      'de': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.alemsys.digital',
    siteName: 'Alemsys',
    title: 'Alemsys - Desenvolvimento Web e Soluções Digitais',
    description: 'Alemsys oferece serviços de desenvolvimento web, aplicações móveis, sistemas personalizados e mentoria em tecnologia. Transforme sua ideia em realidade digital.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alemsys - Desenvolvimento Web e Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alemsys - Desenvolvimento Web e Soluções Digitais',
    description: 'Alemsys oferece serviços de desenvolvimento web, aplicações móveis, sistemas personalizados e mentoria em tecnologia.',
    images: ['/twitter-image.jpg'],
    creator: '@alemsys',
    site: '@alemsys',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'msapplication-TileColor': '#1e3a8a',
    'theme-color': '#1e3a8a',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Alemsys',
    'application-name': 'Alemsys',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eastmanRoman.variable} antialiased`}
      >
        {children}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alemsys",
              "url": "https://www.alemsys.digital",
              "logo": "https://www.alemsys.digital/alemsys.svg",
              "description": "Alemsys oferece serviços de desenvolvimento web, aplicações móveis, sistemas personalizados e mentoria em tecnologia.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English", "Spanish", "German"]
              },
              "sameAs": [
                "https://linkedin.com/company/alemsys",
                "https://github.com/alemsys"
              ],
              "serviceType": [
                "Web Development",
                "Mobile App Development", 
                "Custom Software Development",
                "Technology Mentoring"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
