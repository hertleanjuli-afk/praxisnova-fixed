import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PraxisNova - KI-Schulungen für Bau & Immobilien',
  description: 'Smarter planen. Schneller umsetzen. Mit KI. KI-Schulungen für Bauunternehmen, Architekten und Immobilienprofis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
