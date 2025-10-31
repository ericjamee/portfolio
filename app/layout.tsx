import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Erickson | Full-Stack Developer',
  description: 'Portfolio website of James Erickson, a full-stack developer specializing in React, .NET, Azure, and AWS.',
  keywords: ['James Erickson', 'Full-Stack Developer', 'React', '.NET', 'Azure', 'AWS', 'BYU'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-[#f9f7f3] text-black`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

