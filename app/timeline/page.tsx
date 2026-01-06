"use client";
import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";

export default function TimelinePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const rawEvents = [
    {
      title: "1971–1974",
      span: "Gold → Oil backing",
      text: "Dollar detaches from gold. Oil becomes the implicit reserve anchor.",
      text2: "Global energy demand creates global dollar demand.",
      buttonText: "View system logic ▸",
      detail: "Enforcement replaces convertibility. Military credibility substitutes for trust.",
    },
    {
      title: "1979–1981",
      span: "Carter Doctrine",
      text: "Energy security becomes a military mission.",
      text2: "Oil routes enter defense planning.",
      buttonText: "Why this matters ▸",
      detail: "The dollar-energy link becomes enforceable rather than voluntary.",
    },
    {
      title: "1990–1991",
      span: "Gulf War",
      text: "US emerges as sole global oil-route enforcer.",
      text2: "Petrodollar legitimacy peaks.",
      buttonText: "Hidden payoff ▸",
      detail: "Treasury demand stabilizes. Enforcement credibility resets.",
    },
    {
      title: "2001–2003",
      span: "Afghanistan & Iraq",
      text: "Security corridors + oil nodes.",
      text2: "Economic stress precedes kinetic action.",
      buttonText: "Structural role ▸",
      detail: "Enforcement substitutes for declining confidence.",
    },
    {
      title: "2011–2016",
      span: "Syria & proxy conflicts",
      text: "No full invasion.",
      text2: "Prevent alternative energy blocs.",
      buttonText: "Why proxies ▸",
      detail: "Lower-cost enforcement under fatigue.",
    },
    {
      title: "2017–2024",
      span: "Venezuela",
      text: "Largest proven oil reserves.",
      text2: "Outside US alliance structure.",
      buttonText: "System relevance ▸",
      detail: "Signals enforcement credibility without central war.",
    },
  ];

  const data = rawEvents.map((event, idx) => ({
    title: event.title,
    content: (
      <div className="text-neutral-800 dark:text-neutral-200 text-sm">
        <p className="mb-2 font-semibold">{event.span}</p>
        <p className="mb-3">{event.text}</p>
        <p className="mb-3">{event.text2}</p>
        <button
          onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
          className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
        >
          {expandedIndex === idx ? "Hide ▾" : event.buttonText}
        </button>
        {expandedIndex === idx && (
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 italic">
            {event.detail}
          </p>
        )}
      </div>
    ),
  }));

  return (
    <div className="w-full bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
          Forever War: The Petrodollar Enforcement Cycle
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Economic enforcement → kinetic stabilization → temporary reset
        </p>
      </div>
      <Timeline data={data} />
      <div className="w-full bg-white dark:bg-neutral-950 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
            The Repeating Loop
          </h3>
          <ul className="space-y-2 text-neutral-800 dark:text-neutral-200">
            <li>• Debt expansion</li>
            <li>• Energy settlement stress</li>
            <li>• Dollar confidence erosion</li>
            <li>• Economic warfare</li>
            <li>• Kinetic enforcement</li>
            <li>• Temporary stabilization</li>
            <li>• Higher debt, lower trust</li>
          </ul>
          <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
            Constraint-driven system · No fixed endpoint
          </p>
        </div>
      </div>
    </div>
  );
}
