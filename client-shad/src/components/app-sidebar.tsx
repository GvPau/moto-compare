import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { sidebarItems } from "./app-sidebar-items"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems.navMain} />
        {/* <NavProjects projects={sidebarItems.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarItems.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
