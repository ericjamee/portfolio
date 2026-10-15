'use client'
import { useState } from 'react'
import Link from 'next/link'
const links = [['Work', '/#work'], ['Approach', '/#approach'], ['About', '/#about'], ['Résumés', '/#resume']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="shell navigation" aria-label="Main navigation"><Link href="/" className="wordmark" aria-label="James Erickson home">JE<span>.</span></Link><div className="desktop-links">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="nav-contact" href="/#contact">Get in touch <span aria-hidden="true">↗</span></Link></div><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>{open ? <div id="mobile-navigation" className="mobile-links">{[...links, ['Get in touch', '/#contact']].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div> : null}</nav></header>
}
