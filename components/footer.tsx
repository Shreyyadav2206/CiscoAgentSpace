export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Cisco AgentSpace. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">Internal use only</p>
      </div>
    </footer>
  )
}

