import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PraxisNova AI â KI-Schulungen fÃ¼r Bau & Immobilien | 70% weniger Admin',
  description: 'KI-Workshops fÃ¼r Bauunternehmen, Architekten und Immobilienprofis. In einem halbtÃ¤gigen Workshop automatisiert Ihr Team 70% der Verwaltung. ROI in 6 Wochen. DSGVO-konform.',
  keywords: [
    'KI Schulung Bauunternehmen',
    'KI Workshop Immobilien',
    'KÃ¼nstliche Intelligenz Bau',
    'KI Training Architekten',
    'Automatisierung Immobilienmakler',
    'ChatGPT Workshop',
    'KI Beratung Bau',
    'Digitalisierung Bauunternehmen',
    'PraxisNova AI',
    'KI Schulung Deutschland',
    'Verwaltung automatisieren Bau',
  ],
  authors: [{ name: 'PraxisNova AI', url: 'https://praxisnovaai.com' }],
  creator: 'PraxisNova AI',
  publisher: 'PraxisNova AI',
  metadataBase: new URL('https://praxisnovaai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://praxisnovaai.com',
    siteName: 'PraxisNova AI',
    title: 'PraxisNova AI â KI-Schulungen fÃ¼r Bau & Immobilien',
    description: 'In einem halbtÃ¤gigen Workshop automatisiert Ihr Team 70% der Verwaltung. 10+ Stunden/Woche zurÃ¼ckgewinnen. ROI in 6 Wochen.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PraxisNova AI â KI-Schulungen fÃ¼r Bau & Immobilien',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PraxisNova AI â KI-Schulungen fÃ¼r Bau & Immobilien',
    description: 'In einem halbtÃ¤gigen Workshop automatisiert Ihr Team 70% der Verwaltung.',
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
  verification: {
    // google: 'GOOGLE_SEARCH_CONSOLE_ID_HIER', // Nach Go-Live eintragen
  },
}

// Strukturierte Daten (JSON-LD) fÃ¼r Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PraxisNova AI',
  description: 'KI-Schulungen und Workshops fÃ¼r Bauunternehmen, Architekten und Immobilienprofis in Deutschland.',
  url: 'https://praxisnovaai.com',
  telephone: '',
  email: 'info@praxisnovaai.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Otto-Hahn-StraÃe',
    addressLocality: 'NÃ¼rtingen',
    postalCode: '72622',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6268,
    longitude: 9.3363,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  serviceType: 'KI-Schulungen und Workshops',
  priceRange: 'â¬â¬â¬',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Anjuli Hertle',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Workshop',
      price: '7900',
      priceCurrency: 'EUR',
      description: '1 Workshop, 3 Module, bis 10 Teilnehmer, 30 Tage E-Mail Support',
    },
    {
      '@type': 'Offer',
      name: 'Professional Workshop',
      price: '11900',
      priceCurrency: 'EUR',
      description: '1 Workshop, 3 Module, bis 15 Teilnehmer, 60 Tage Support + 1 Follow-up Call',
    },
    {
      '@type': 'Offer',
      name: 'VIP Workshop',
      price: '19900',
      priceCurrency: 'EUR',
      description: '2 Workshops, Custom-Modul, bis 20 Teilnehmer, 90 Tage WhatsApp + 2 Calls',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
