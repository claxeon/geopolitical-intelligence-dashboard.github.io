"use client"

import Link from "next/link"
import RotatingEarth from "@/components/ui/wireframe-dotted-globe"
import { SystemDashboard } from "@/components/dashboard/SystemDashboard"

export default function HomePage() {
  return (
    <main className="w-full bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Geopolitical Systems Dashboard
            </h1>
            <p className="text-lg text-neutral-400 mb-4">
              Tracking global power, markets, and conflict through game theory and constraints
            </p>
            <p className="text-neutral-500 text-sm mb-8">
              Analytical framework using public information and game-theoretic models. No policy advocacy. No insider claims.
            </p>
            <div className="flex gap-4">
              <Link
                href="/timeline"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Explore Timeline
              </Link>
              <Link
                href="/framework.html"
                className="px-6 py-3 border border-neutral-600 hover:border-neutral-400 rounded-lg font-semibold transition-colors"
              >
                Learn Framework
              </Link>
            </div>
          </div>

          {/* Globe */}
          <div className="w-full">
            <RotatingEarth width={600} height={600} className="w-full" />
          </div>
        </div>
      </section>

      {/* Global State Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-gray-300 dark:border-neutral-800">
        <SystemDashboard />
      </section>

      {/* Latest Updates */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-gray-300 dark:border-neutral-800">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800 hover:border-neutral-600 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-neutral-500 text-sm">2026-01-05</p>
              <p className="text-xl font-semibold mt-2">Global State Update: CB-B Persists, No CB-C Transition</p>
            </div>
          </div>
          <Link
            href="/updates"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-neutral-800 mb-12">
        <h2 className="text-3xl font-bold mb-12">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/timeline"
            className="group bg-neutral-900 rounded-lg p-8 border border-neutral-800 hover:border-blue-600 hover:bg-neutral-900/80 transition-all"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Timeline</h3>
            <p className="text-neutral-400 text-sm">The Forever War: Petrodollar Enforcement Cycle</p>
          </Link>

          <Link
            href="/framework"
            className="group bg-neutral-900 rounded-lg p-8 border border-neutral-800 hover:border-blue-600 hover:bg-neutral-900/80 transition-all"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Framework</h3>
            <p className="text-neutral-400 text-sm">Structural geopolitical analysis methodology</p>
          </Link>

          <Link
            href="/updates"
            className="group bg-neutral-900 rounded-lg p-8 border border-neutral-800 hover:border-blue-600 hover:bg-neutral-900/80 transition-all"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Updates</h3>
            <p className="text-neutral-400 text-sm">Real-time system state monitoring and analysis</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500 text-sm">
          <p>Constraint-driven system · No fixed endpoint</p>
        </div>
      </footer>
    </main>
  )
}
