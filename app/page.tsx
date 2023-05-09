import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ExperimentsNav from "@/components/experiments-nav"
import { StyleSwitcher } from "@/components/style-switcher"

export default function IndexPage() {
  return (
    <div>
      <StyleSwitcher />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Experimental Projects <br className="hidden sm:inline" />
            on Next JS
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground sm:text-md">
            The projects under Experiments are still in development but you are
            free to check them out.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Portfolio
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      {/* <ExperimentsNav className="[&>a:first-child]:text-primary" /> */}
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
          {/* <DashboardPage /> */}
          {/* <div>Dashboard</div> */}
        </div>
      </section>
    </div>
  )
}
