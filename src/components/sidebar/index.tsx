import {  Sidebar,  SidebarContent,  SidebarFooter,  SidebarGroup,  SidebarGroupContent,  SidebarHeader } from '@/components/ui/sidebar'
import { SidebarAppMenu } from './menu'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...props}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarAppMenu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
