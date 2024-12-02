import './globals.css'
import Navbar from './Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TIC | IITR',
  description: 'Think India is a student organization that fosters collaboration among students, researchers, and professionals to promote innovation, nation-building, and socio-political awareness in India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={inter.style} className='flex flex-col items-center '>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
