import Link from "next/link"
import { ArrowRight, Plus, Code, Database, FileText, MessageSquare, PieChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentTemplateCard } from "@/components/agent-template-card"

export default function BuildAgent() {
  // This would typically come from a database or API
  const templates = [
    {
      id: "1",
      name: "Data Analysis Agent",
      description: "Process and analyze data from various sources",
      icon: <PieChart className="h-8 w-8" />,
      category: "Data",
      complexity: "Medium",
    },
    {
      id: "2",
      name: "Document Processing Agent",
      description: "Extract and summarize information from documents",
      icon: <FileText className="h-8 w-8" />,
      category: "Productivity",
      complexity: "Low",
    },
    {
      id: "3",
      name: "Customer Support Agent",
      description: "Automate responses to common customer inquiries",
      icon: <MessageSquare className="h-8 w-8" />,
      category: "Support",
      complexity: "Medium",
    },
    {
      id: "4",
      name: "Code Assistant Agent",
      description: "Help with coding tasks and debugging issues",
      icon: <Code className="h-8 w-8" />,
      category: "Development",
      complexity: "High",
    },
    {
      id: "5",
      name: "Database Query Agent",
      description: "Generate and execute database queries",
      icon: <Database className="h-8 w-8" />,
      category: "Data",
      complexity: "High",
    },
    {
      id: "6",
      name: "Team Collaboration Agent",
      description: "Facilitate communication and coordination among team members",
      icon: <Users className="h-8 w-8" />,
      category: "Productivity",
      complexity: "Medium",
    },
  ]

  const categories = ["All", "Data", "Productivity", "Development", "Support"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Build Your Own Agent</h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create custom AI agents tailored to your specific needs
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Start from scratch</CardTitle>
                  <CardDescription>
                    Build a completely custom agent with full control over its capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center rounded-lg border border-dashed p-8">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Create a new agent</h3>
                      <p className="text-sm text-muted-foreground">
                        Start with a blank canvas and build your agent from the ground up
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/build/new">
                      Start Building <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Or use a template</h2>
                <p className="text-muted-foreground">Get started quickly with pre-built agent templates</p>
                <Tabs defaultValue="All" className="w-full">
                  <TabsList className="flex flex-wrap justify-start">
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category} className="px-4">
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {categories.map((category) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {templates
                          .filter((template) => category === "All" || template.category === category)
                          .map((template) => (
                            <AgentTemplateCard key={template.id} template={template} />
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

