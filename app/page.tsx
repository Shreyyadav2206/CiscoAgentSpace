import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AgentIcon } from "@/components/agent-icon"
import { AgentWidget } from "@/components/agent-widget"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to Cisco AgentSpace
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Your internal marketplace for AI agents. Discover, use, and build intelligent agents to enhance
                  productivity across your organization.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/network">
                      Explore Agents <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/build">Build Your Own Agent</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
                  <div className="relative rounded-lg border bg-background p-8 shadow-lg">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Featured Agents</h3>
                        <p className="text-sm text-muted-foreground">Discover our most popular AI agents</p>
                      </div>
                      <div className="grid gap-4">
                        {[
                          { name: "Data Analyzer", description: "Process and visualize complex datasets" },
                          { name: "Document Assistant", description: "Extract and summarize information" },
                          { name: "Meeting Scheduler", description: "Coordinate meetings across teams" },
                        ].map((agent) => (
                          <Card key={agent.name} className="overflow-hidden">
                            <CardHeader className="p-4">
                              <CardTitle className="text-base">{agent.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <CardDescription>{agent.description}</CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top Agents</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our most popular and powerful AI agents ready to assist you
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              <AgentIcon
                name="Webex Call Ice Breaker"
                icon="/placeholder.svg?height=80&width=80"
                description="Tired of those awkward first minutes of a Webex call trying to connect with the stranger on the other end of your call while other log on? Check against KYC database and Linkedin and give information about the User"
              />
              <AgentIcon
                name="Techzone Validator"
                icon="/placeholder.svg?height=80&width=80"
                description="Enter the Techzone Article link and it will make suggestions, correct grammar and make format changes to be fit for External publication"
              />
              <AgentIcon
                name="Case Reviewer"
                icon="/placeholder.svg?height=80&width=80"
                description="Enter SR and it will review the case"
              />
              <AgentIcon
                name="Daily Summary Generator"
                icon="/placeholder.svg?height=80&width=80"
                description="Summarizes all the cases with important metrics and case to be reviewed"
              />
              <AgentIcon
                name="PPT Generator"
                icon="/placeholder.svg?height=80&width=80"
                description="Summarize a topic and it will generate a PPT"
              />
              <AgentIcon
                name="Video Script Editor"
                icon="/placeholder.svg?height=80&width=80"
                description="Enter video link and create a custom script from the Video"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get notified when we launch.{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">New Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faster iteration. More innovation.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The platform for rapid progress. Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cisco AgentSpace. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            The below project is being build by Shrey Yadav and is it test phase. Do not use for External use
          </p>
        </div>
      </footer>
      <AgentWidget />
    </div>
  )
}

