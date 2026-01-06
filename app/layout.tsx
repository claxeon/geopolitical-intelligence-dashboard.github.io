import "../app/globals.css";
import Navbar from "@/components/navbar";
import React from "react";

// Force all pages to render dynamically on the server
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Geopolitical Systems Dashboard",
  description: "Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
