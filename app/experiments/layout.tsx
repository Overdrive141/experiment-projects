import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ExperimentsNav from "@/components/experiments-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export const metadata: Metadata = {
  title: "Experiments",
  description: "Experiments",
}

interface ExperimentLayoutProps {
  children: React.ReactNode
}

export default function ExperimentsLayout({ children }: ExperimentLayoutProps) {
  return (
    <>
      <div className="container pb-10">
        <PageHeader>
          <PageHeaderHeading className="hidden md:block">
            Project Experiments
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            These are projects that I am testing out and experimenting with.
          </PageHeaderDescription>
        </PageHeader>

        <section className="pb-6 md:pb-10">
          <div className="flex w-full items-center justify-between">
            <div className="flex space-x-4">
              <Link
                href="#"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-[0.5rem]"
                )}
              >
                Don&apos;t Press Me
              </Link>
            </div>
          </div>
        </section>
        <section>
          <ExperimentsNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
// export default ExperimentsLayout
