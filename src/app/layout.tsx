import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doraemon AI',
  description: 'Next Generation of Trustworthy Real-Time AI-Powered Personalization and Recommendation Platform for eCommerce, FinTech, EdTech and Data-Driven SaaS.',
  icons: '/logo.jpeg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
