import Link from 'next/link';
import { contactInfo } from '@/data/siteData';

/**
 * FOOTER COMPONENT - Minimalist Design
 * Clean, text-focused footer with essential links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Minimal footer: centered small labels */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-xs tracking-[0.06em] text-black/70">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-black">GitHub</a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-black">LinkedIn</a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-black">Email</a>
          </div>
          <p className="text-[11px] text-black/60">© {currentYear} James Erickson • Provo, Utah</p>
        </div>
      </div>
    </footer>
  );
}
