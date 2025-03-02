"use client"
import Image from "next/image"

interface AgentIconProps {
  name: string
  icon: string
  description: string
}

export function AgentIcon({ name, icon, description }: AgentIconProps) {
  const handleClick = () => {
    // Dispatch a custom event that the AgentWidget component will listen for
    const event = new CustomEvent("openAgentWidget", {
      detail: { name, description },
    })
    window.dispatchEvent(event)
  }

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors">
        <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  )
}

