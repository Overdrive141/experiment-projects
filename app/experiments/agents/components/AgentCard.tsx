"use client"

import { HTMLAttributes } from "react"
import Image from "next/image"
import { List, PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Agent } from "../data/agents"
import { MLModel, models } from "../data/models"

interface AgentCardProps extends HTMLAttributes<HTMLDivElement> {
  agent: Agent
  aspectRatio?: "portrait" | "square" | "landscape"
  width?: number
  height?: number
}

export const AgentCard = ({
  agent,
  className,
  aspectRatio,
  width,
  height,

  ...props
}: AgentCardProps) => {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="rounded-md overflow-hidden">
            <Image
              src={agent.cover}
              alt={agent.name}
              width={width}
              height={height}
              unoptimized
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105  blur-[2px]  grayscale-[2px]",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Favorites</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Model List</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Model
              </ContextMenuItem>
              <ContextMenuSeparator />
              {models?.map((model: string) => (
                <ContextMenuItem key={model}>
                  <List className="mr-2 h-4 w-4" /> {model}
                </ContextMenuItem>
              ))}
              {/* {models.map((model) => (
                <ContextMenuItem key={model}>
                  <ListIcon className="mr-2 h-4 w-4" /> {model}
                </ContextMenuItem>
              ))} */}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{agent.name}</h3>
        <p className="text-xs text-muted-foreground">{agent.author}</p>
      </div>
    </div>
  )
}
