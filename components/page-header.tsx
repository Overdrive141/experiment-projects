import Balance from "react-wrap-balancer"

import { cn } from "@/lib/utils"

function PageHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        // "flex max-w-[980px] flex-col items-start gap-2 py-6",
        "flex flex-col items-start max-w-[980px] py-6",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold md:text-5xl lg:text-6xl lg:leading-[1.5] leading-tight tracking-[-0.1rem]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        // "max-w-[750px] text-lg text-muted-foreground sm:text-xl",
        "text-lg  max-w-xl text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription }
