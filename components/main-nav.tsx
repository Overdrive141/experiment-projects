"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-inter sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="hidden gap-6 md:flex">
        <Link
          href="/"
          className={cn(
            "flex items-center text-lg font-semibold  sm:text-sm",
            pathname === "/" ? "text-foreground" : "text-foreground/50"
          )}
        >
          Home
        </Link>

        {items?.length ? (
          <>
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-lg font-semibold  sm:text-sm",
                      item.disabled && "cursor-not-allowed opacity-80",
                      pathname.startsWith(item.href)
                        ? "text-foreground"
                        : "text-foreground/50"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </>
        ) : null}
      </nav>
    </div>
  )
}
