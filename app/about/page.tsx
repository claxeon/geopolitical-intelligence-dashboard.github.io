"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="w-full bg-black text-white dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About This Project</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Purpose</h2>
            <p>
              This dashboard is an analytical tool for understanding geopolitical systems through 
              game-theoretic and constraint-driven modeling. It tracks global power dynamics, 
              enforced resource flows, and cyclical patterns without policy advocacy or insider claims.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Methodology</h2>
            <p>All analysis is built on:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Publicly available information</li>
              <li>Historical data and verifiable sources</li>
              <li>Game-theoretic frameworks</li>
              <li>Structural constraint analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What This Is Not</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Policy advocacy or prescriptive recommendations</li>
              <li>Classified or proprietary intelligence</li>
              <li>Political endorsement or criticism</li>
              <li>Financial or investment advice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Key Resources</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link href="/timeline" className="text-blue-400 hover:text-blue-300">
                  Petrodollar Enforcement Timeline
                </Link>
                {" "}— Historical cycle of economic and kinetic enforcement
              </li>
              <li>
                <Link href="/framework" className="text-blue-400 hover:text-blue-300">
                  Analytical Framework
                </Link>
                {" "}— Core concepts and structural analysis
              </li>
              <li>
                <Link href="/updates" className="text-blue-400 hover:text-blue-300">
                  System Updates
                </Link>
                {" "}— Current state monitoring
              </li>
            </ul>
          </section>

          <section className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <p className="text-sm">
              <strong>Constraint-driven system · No fixed endpoint</strong>
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              Updated: 2026-01-06 · Analysis framework uses game-theoretic models of enforced 
              resource flows and peripheral keystone dynamics.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-neutral-800">
            <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
