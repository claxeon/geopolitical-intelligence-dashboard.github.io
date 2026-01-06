"use client"

import Link from "next/link"

export default function FrameworkPage() {
  return (
    <main className="w-full bg-black text-white dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Analytical Framework</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Structural Geopolitical Analysis</h2>
            <p>
              This dashboard uses game-theoretic models to understand global power structures, 
              enforced resource flows, and cyclical patterns of economic and kinetic conflict.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Core Concepts</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Petrodollar System:</strong> Energy tied to currency through enforcement</li>
              <li><strong>Peripheral Keystones:</strong> Strategic regions where enforcement is visible</li>
              <li><strong>Enforcement Cycles:</strong> Economic coercion → kinetic action → reset</li>
              <li><strong>Constraint Dynamics:</strong> Debt, energy settlement, and credibility as system limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Methodology</h2>
            <p>
              Analysis is built on:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Public information and verifiable data only</li>
              <li>Game-theoretic constraints (cost, credibility, enforcement)</li>
              <li>Historical pattern recognition (cyclical behavior)</li>
              <li>No policy advocacy or proprietary claims</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Current State Model</h2>
            <p>
              The system operates in cyclical phases:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>CB-A:</strong> Confidence → Expansion (high trust in system)</li>
              <li><strong>CB-B:</strong> Stress → Enforcement (visible coercion, peripheral activation)</li>
              <li><strong>CB-C:</strong> Breakdown → Reset (system reconfiguration or collapse)</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-500">
              Current phase: <span className="text-white font-semibold">CB-B · Peripheral Activation</span>
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
