import Link from "next/link"
import { Command } from "lucide-react"
import { Button } from "./ui/button-custom"
import { ToggleSwitch } from "./ui/toggle-switch"

interface SiteHeaderProps {
  demoMode: boolean
  setDemoMode: (value: boolean) => void
}

export function SiteHeader({ demoMode, setDemoMode }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/50 backdrop-blur-xl">
      <div className="container flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2 mr-6 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/30 transition-shadow">
            <Command className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg">Logo Maker</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <ToggleSwitch checked={demoMode} onCheckedChange={setDemoMode} label="Demo Mode" />
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </header>
  )
}
