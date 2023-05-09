"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { ScrollArea } from "./ui/scroll-area"

const experiments = [
  {
    name: "Agents",
    href: "/experiments/agents",
  },
  {
    name: "Analytics",
    href: "/experiments/analytics",
  },
]

interface ExperimentsNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const ExperimentsNav = ({ ...rest }: ExperimentsNavProps) => {
  const pathname = usePathname()
  return (
    <ScrollArea>
      <div className={cn("mb-4 flex items-center")} {...rest}>
        {experiments.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "flex px-4 font-medium",
              pathname === item.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ExperimentsNav
