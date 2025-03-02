import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AgentTemplateCardProps {
  template: {
    id: string
    name: string
    description: string
    icon: React.ReactNode
    category: string
    complexity: string
  }
}

export function AgentTemplateCard({ template }: AgentTemplateCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary/10 p-2 text-primary">{template.icon}</div>
          <div>
            <CardTitle>{template.name}</CardTitle>
            <CardDescription>{template.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{template.category}</Badge>
          <Badge variant="outline">Complexity: {template.complexity}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/build/template/${template.id}`}>
            Use Template <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

