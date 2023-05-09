import {
  Bot,
  BotIcon,
  DollarSign,
  Figma,
  FileArchive,
  LayoutGrid,
  Library,
  LifeBuoy,
  List,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
  Youtube,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { MLModel } from "../data/models"

interface SideProps extends React.HTMLAttributes<HTMLDivElement> {
  models: MLModel[]
  selectedModel: MLModel
}

export const Sidebar = ({ models, selectedModel, ...props }: SideProps) => {
  return (
    <div className={cn("pb-12", props.className)}>
      <div className="px-4 py-2 ">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Prebuilt
        </h2>
        <div className="space-y-1">
          <Button
            variant="secondary"
            size="sm"
            className="w-full justify-start"
          >
            <List className="mr-2 h-4 w-4" />
            All
          </Button>
        </div>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Youtube className="mr-2 h-4 w-4" />
            YT Script Writer
          </Button>
        </div>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Figma className="mr-2 h-4 w-4" />
            Figma to Notion
          </Button>
        </div>
      </div>

      <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Chatbots
        </h2>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <DollarSign className="mr-2 h-4 w-4" />
            Crypto Analyst
          </Button>

          <Button variant="ghost" size="sm" className="w-full justify-start">
            <LifeBuoy className="mr-2 h-4 w-4" />
            Life Advice
          </Button>
        </div>
      </div>

      <div className="py-2">
        <h2 className="relative px-6 text-lg font-semibold tracking-tight">
          Prompt Generators
        </h2>
        <p className="text-xs text-muted-foreground px-6 tracking-tighter">
          Powered by GPT4
        </p>
        <ScrollArea className="h-[300px] px-2">
          <div className="space-y-1 p-2">
            {models.map((model) => (
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Bot className="mr-2 h-4 w-4" />
                {model}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
