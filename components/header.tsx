import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">Cisco</span> AgentSpace
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/network" className="text-sm font-medium hover:underline underline-offset-4">
            Agent Network
          </Link>
          <Link href="/build" className="text-sm font-medium hover:underline underline-offset-4">
            Build an Agent
          </Link>
        </nav>
      </div>
    </header>
  )
}

