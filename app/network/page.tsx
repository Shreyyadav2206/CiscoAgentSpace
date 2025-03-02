import { Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentCard } from "@/components/agent-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AgentNetwork() {
  // This would typically come from a database or API
  const agents = [
    {
      id: "1",
      name: "Data Analyzer",
      description:
        "Process and visualize complex datasets with ease. Extract insights and generate reports automatically.",
      category: "Data",
      usageCount: 1243,
      rating: 4.8,
      tags: ["Analytics", "Visualization", "Reports"],
    },
    {
      id: "2",
      name: "Document Assistant",
      description: "Extract information from documents, summarize content, and answer questions about your files.",
      category: "Productivity",
      usageCount: 987,
      rating: 4.7,
      tags: ["Documents", "Summarization", "Q&A"],
    },
    {
      id: "3",
      name: "Meeting Scheduler",
      description:
        "Coordinate meetings across teams and time zones. Handles availability checks and sends invitations.",
      category: "Productivity",
      usageCount: 1567,
      rating: 4.9,
      tags: ["Calendar", "Scheduling", "Coordination"],
    },
    {
      id: "4",
      name: "Code Assistant",
      description: "Get help with coding tasks, debug issues, and receive suggestions for code improvements.",
      category: "Development",
      usageCount: 876,
      rating: 4.6,
      tags: ["Coding", "Debugging", "Development"],
    },
    {
      id: "5",
      name: "Customer Support Bot",
      description: "Automate responses to common customer inquiries and escalate complex issues to human agents.",
      category: "Support",
      usageCount: 2134,
      rating: 4.5,
      tags: ["Customer Service", "Automation", "Support"],
    },
    {
      id: "6",
      name: "Network Troubleshooter",
      description: "Diagnose and resolve common network issues. Provides step-by-step guidance for complex problems.",
      category: "IT",
      usageCount: 654,
      rating: 4.4,
      tags: ["Networking", "Troubleshooting", "IT Support"],
    },
  ]

  const categories = ["All", "Data", "Productivity", "Development", "Support", "IT"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Agent Space Network</h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover and use AI agents built by teams across your organization
              </p>
            </div>
            <div className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search agents..."
                  className="w-full rounded-md border bg-background pl-8 shadow-sm"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Tabs defaultValue="All" className="mx-auto mt-8 w-full max-w-4xl">
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
                    {agents
                      .filter((agent) => category === "All" || agent.category === category)
                      .map((agent) => (
                        <AgentCard key={agent.id} agent={agent} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

