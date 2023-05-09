import { Metadata } from "next"
import { Activity, CreditCard, DollarSign, Download, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AnalyticsNav } from "./components/AnalyticsNav"
import CalendarDateRangePicker from "./components/CalendarDateRangePicker"
import { Search } from "./components/Search"
import TeamSwitcher from "./components/TeamSwitcher"
import { UserNav } from "./components/UserNav"

export const metadata: Metadata = {
  title: "Experimental Analytics",
  description: "Experimenting with analytics dashboard",
}

export default function AnalyticsPage() {
  return (
    <>
      <div className="md:hidden">
        <h3 className="text-2xl font-semibold">Mobile version</h3>
      </div>

      <div className="hidden md:flex flex-col">
        <div className="flex items-center px-4 py-4 gap-4">
          <TeamSwitcher />
          <AnalyticsNav />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
        <div className="p-8 flex-1 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          <div className="border-t" />
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales" disabled>
                Sales
              </TabsTrigger>
              <TabsTrigger value="inventory" disabled>
                Inventory
              </TabsTrigger>
              <TabsTrigger value="employees" disabled>
                Field Workers & Employees
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 h-[50vh] overflow-hidden">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <Separator orientation="horizontal" />
                  <CardContent className="flex justify-center items-center h-full  bg-black/10 saturate-100">
                    {/* <Overview /> */}
                    <h3 className="text-lg font-semibold">
                      Charts Coming Soon
                    </h3>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <div className="blur-sm">
                    <CardHeader>
                      <CardTitle>Recent Viewers</CardTitle>
                      <CardDescription>
                        Over 500 viewers in the last 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>{/* <Recent /> */}</CardContent>{" "}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
