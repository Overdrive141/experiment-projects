"use client"

import { useState } from "react"
import { CalendarCheck2, CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function CalendarDateRangePicker() {
  const [date, setDate] = useState<{ from: Date; to: Date }>({
    from: new Date(2021, 1, 1),
    to: new Date(2021, 1, 10),
  })

  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <CalendarCheck2 className="mr-2 h-4 w-4" />
            2023 - 2024
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <Calendar
            initialFocus
            mode="range"
            numberOfMonths={2}
            defaultMonth={date.from}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
