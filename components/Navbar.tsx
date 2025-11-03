"use client";

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Resume', href: '/#resume' },
  { name: 'Contact', href: '/#footer' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 z-50">
      {/* Menu Button */}
      <button
        type="button"
        className="relative z-10 p-3 rounded-full bg-[#f9f7f3]/90 backdrop-blur-md border border-black/20 hover:bg-[#f9f7f3] transition-colors shadow-lg"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 bg-[#f9f7f3]/95 backdrop-blur-md border border-black/20 rounded-lg shadow-xl overflow-hidden min-w-[150px]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-sm tracking-[0.08em] text-black/80 hover:text-black hover:bg-black/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
