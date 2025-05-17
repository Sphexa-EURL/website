"use client"
import * as React from "react"
import Link from "next/link"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

function LinkAccordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function LinkAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

interface LinkAccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  href: string
  target?: string
}

function LinkAccordionTrigger({
  className,
  children,
  href,
  target,
  ...props
}: LinkAccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <Link href={href} passHref target={target} className="">
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
          {...props}
        >
          {children}
        </AccordionPrimitive.Trigger>
      </Link>
    </AccordionPrimitive.Header>
  )
}

export { LinkAccordion, LinkAccordionItem, LinkAccordionTrigger }