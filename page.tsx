"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  const [demoMode, setDemoMode] = useState(true)

  return (
    <div className="relative min-h-screen bg-black">
      {/* Gradient overlay at the top - increased height from 500px to 800px */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>

      {/* Content */}
      <SiteHeader demoMode={demoMode} setDemoMode={setDemoMode} />
      <main className="flex flex-col items-center justify-center p-4 pt-24">
        {/* Empty divs to create scrollable space */}
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </main>
    </div>
  )
}
