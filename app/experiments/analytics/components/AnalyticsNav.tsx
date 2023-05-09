import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function AnalyticsNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/experiments/analytics"
        className="font-medium text-sm transition-colors hover:text-primary"
      >
        Analytics
      </Link>
      <Link
        href="/experiments/analytics"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Orders
      </Link>
      <Link
        href="/experiments/analytics"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Integrations
      </Link>
    </nav>
  )
}
