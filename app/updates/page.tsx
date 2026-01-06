"use client"

import Link from "next/link"

export default function UpdatesPage() {
  const updates = [
    {
      date: "2026-01-05",
      title: "Global State Update: CB-B Persists, No CB-C Transition",
      content:
        "System remains in peripheral activation phase. Enforcement stress continues on Venezuela node. No immediate signs of system-wide reset.",
    },
    {
      date: "2025-12-20",
      title: "Energy Settlement Monitoring",
      content:
        "Oil price fluctuations reflect underlying confidence dynamics. Middle East tensions correlated with debt expansion cycle.",
    },
    {
      date: "2025-11-15",
      title: "Peripheral Keystone Activity",
      content:
        "Venezuela sanctions regime escalates. Structural signal: system enforcing petrodollar compliance through energy pressure.",
    },
  ]

  return (
    <main className="w-full bg-black text-white dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">System Updates</h1>

        <div className="space-y-6">
          {updates.map((update, idx) => (
            <div key={idx} className="bg-neutral-900 rounded-lg p-8 border border-neutral-800 hover:border-neutral-600 transition-colors">
              <p className="text-neutral-500 text-sm mb-2">{update.date}</p>
              <h2 className="text-xl font-bold text-white mb-4">{update.title}</h2>
              <p className="text-neutral-300">{update.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
