import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Archive, Home, Trash } from "lucide-react";

const items = [
  { title: "Notas", url: "#home", icon: Home },
  { title: "Arquivo", url: "#archive", icon: Archive },
  { title: "Lixeira", url: "#trash", icon: Trash },
];

export const SidebarAppMenu: React.FC = () => {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
