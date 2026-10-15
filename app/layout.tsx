import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  metadataBase: new URL('https://jameseerickson.com'),
  title: 'James Erickson | Business Systems, Automation & Product',
  description: 'James Erickson builds reliable reporting pipelines, automates workflows, and develops useful software. Explore selected work in business systems, automation, and product delivery.',
  openGraph: { title: 'James Erickson — Reliable systems. Practical results.', description: 'Business systems, process automation, and product delivery.', url: 'https://jameseerickson.com', type: 'website' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body></html>
}
