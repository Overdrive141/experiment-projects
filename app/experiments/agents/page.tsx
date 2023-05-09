import { Metadata } from "next"
import Image from "next/image"
import { PlusCircle } from "lucide-react"

import "./styles.css"
import { Replicate } from "@/assets/Replicate"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AgentCard } from "./components/AgentCard"
import { Menu } from "./components/Menu"
import { Sidebar } from "./components/Sidebar"
import { agents } from "./data/agents"
import { models } from "./data/models"

export const metadata: Metadata = {
  title: "Experimental Agents",
  description: "Experimenting with AI Agent templates UI",
}

export default function AgentsPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          //   className="block dark:hidden"
        />
        <Image
          src="/music-dark.png"
          width={1280}
          height={1114}
          alt="Agents"
          //   className="hidden dark:block"
        />
      </div>

      <div className="hidden md:block">
        <Menu />
        <div className="border-t" />
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar
              models={models}
              selectedModel={models[0]}
              className="hidden lg:block"
            />

            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="agents" className="h-full space-y-6">
                  <div className="flex items-center space-between">
                    <TabsList>
                      <TabsTrigger value="agents" className="relative">
                        Agents
                      </TabsTrigger>
                      <TabsTrigger value="models">Models</TabsTrigger>
                      <TabsTrigger value="playground" disabled>
                        Live
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4">
                      <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Agent
                      </Button>
                    </div>
                  </div>

                  <TabsContent value="agents" className="border-none p-0">
                    <div className="flex items-center justify-between">
                      <div className="py-2 space-y-1">
                        <h2 className="font-semibold text-2xl">AI Agents</h2>
                        <p className="text-gray-400 text-sm">
                          Most popular. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {agents.map((agent, idx) => (
                            <AgentCard
                              key={idx}
                              agent={agent}
                              className="lg:w-[250px]"
                              aspectRatio="portrait"
                              width={250}
                              height={330}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="models"
                    // className="h-full flex-col border-none p-0 data-[state=active]:flex"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight leading-[1]">
                          ML Models
                        </h2>
                        <p className="text-sm text-muted-foreground tracking-tighter">
                          Powered by Replicate.
                        </p>
                        <p className="text-[10px] text-muted-foreground tracking-tighter ">
                          Explore your favorite models (Coming Soon)
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex flex-col space-y-4 justify-center rounded-md items-center h-[450px] border border-dashed">
                      <Replicate />
                      <div className="flex flex-col items-center space-y-2">
                        <h3 className="font-semibold">No models added</h3>
                        <p className="text-muted-foreground text-sm">
                          You have not added any models yet. Add one below.
                        </p>

                        <Dialog>
                          <DialogTrigger>
                            <Button>
                              <PlusCircle className="mr-2 h-4 w-4" />
                              Add Model
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Model</DialogTitle>
                              <DialogDescription>
                                Copy and paste the API URL from Replicate to
                                import
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col  gap-4 py-4">
                              <div className="flex flex-col gap-2 h-1 group hover:h-8 transition-all duration-[4000ms]">
                                <Label htmlFor="url">API URL</Label>
                                <p className="transition-all duration-1000 hidden group-hover:block opacity-0 group-hover:opacity-95  text-muted-foreground text-sm">
                                  Copy and paste
                                </p>
                              </div>
                              <Input
                                id="url"
                                placeholder="https://example.com"
                              />
                            </div>

                            <DialogFooter>
                              <Button>Import Model</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
