"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronsDownUpIcon,
  ChevronsUpDown,
  CreditCard,
  SearchIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Farhan H",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "141 Studio.",
        value: "141-studio",
      },
      {
        label: "Train Fitness Inc.",
        value: "train-inc",
      },
    ],
  },
]

type SearchBarProps = {
  setOpen: (open: boolean) => void
  setSelectedTeam: (team: any) => void
  setShowNewTeamDialog: (show: boolean) => void
}

const SearchBar = ({
  setSelectedTeam,
  setOpen,
  setShowNewTeamDialog,
}: SearchBarProps) => {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search team..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups?.map((group) => (
          <CommandGroup heading={group.label} key={group.label}>
            {group.teams.map((team) => (
              <CommandItem
                className="flex gap-2"
                onSelect={() => {
                  setSelectedTeam(team)
                  setOpen(false)
                }}
              >
                <Avatar className="w-[1.5rem] h-[1.5rem]">
                  <AvatarImage
                    width={10}
                    height={10}
                    className="rounded-full object-cover "
                    src="https://vercel.com/api/www/avatar?u=overdrive141&s=48"
                    alt="Colm Tuite"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{team.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
      <CommandSeparator />
      <CommandList>
        <CommandGroup>
          <DialogTrigger asChild>
            <CommandItem
              onSelect={() => {
                setOpen(true)
                setShowNewTeamDialog(true)
              }}
            >
              <span>Create New Team</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
          </DialogTrigger>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default function TeamSwitcher() {
  const [open, setOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState(groups[0].teams[0])
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div className="flex items-center gap-2 bg-white py-2 px-2 w-[180px] rounded-md hover:bg-accent">
            <Avatar className="w-[1.5rem] h-[1.5rem]">
              <AvatarImage
                width={10}
                height={10}
                className="rounded-full object-cover "
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Farhan"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-sm font-semibold">Farhan H</h3>
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </div>
          {/* <SelectValue placeholder="Select a fruit" /> */}
        </PopoverTrigger>
        <PopoverContent className="md:w-[180px] p-0 border-none">
          <SearchBar
            setOpen={setOpen}
            setSelectedTeam={setSelectedTeam}
            setShowNewTeamDialog={setShowNewTeamDialog}
          />
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team Name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Subscription Plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="link" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
