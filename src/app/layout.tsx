import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Top 100 US Podcasts (Apple Podcasts Top Charts)',
  description: 'This is a list of the top 100 podcasts in the United States on Apple Podcasts (iTunes)'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
