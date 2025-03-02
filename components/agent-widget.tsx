"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function AgentWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [agent, setAgent] = useState({ name: "", description: "" })
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")

  useEffect(() => {
    // Listen for the custom event from AgentIcon
    const handleOpenWidget = (event: any) => {
      setAgent({
        name: event.detail.name,
        description: event.detail.description,
      })
      setIsOpen(true)
      setQuery("")
      setResponse("")
    }

    window.addEventListener("openAgentWidget", handleOpenWidget)

    return () => {
      window.removeEventListener("openAgentWidget", handleOpenWidget)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Simulate API call
    setIsLoading(true)
    setResponse("")

    // Mock response after delay
    setTimeout(() => {
      setResponse(`This is a simulated response from ${agent.name} for your query: "${query}"`)
      setIsLoading(false)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-primary/5 relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <CardTitle>{agent.name}</CardTitle>
          <CardDescription>{agent.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 max-h-[300px] overflow-y-auto">
          {response ? (
            <div className="p-3 bg-muted rounded-lg">
              <p>{response}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              {isLoading ? "Processing your request..." : "Enter your query below to get started"}
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t p-3">
          <form className="flex w-full items-center space-x-2" onSubmit={handleSubmit}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query here..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

