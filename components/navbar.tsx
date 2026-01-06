"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm dark">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Geopolitical Systems
        </Link>
        <ul className="flex gap-6 text-sm text-neutral-300">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/signals" className="hover:text-white transition-colors">
              Signals
            </Link>
          </li>
          <li>
            <Link href="/timeline" className="hover:text-white transition-colors">
              Timeline
            </Link>
          </li>
          <li>
            <Link href="/framework" className="hover:text-white transition-colors">
              Framework
            </Link>
          </li>
          <li>
            <Link href="/updates" className="hover:text-white transition-colors">
              Updates
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
