import "@/styles/index.css";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "./components/header";
import { AppSidebar } from "./components/sidebar";
import { createRoot } from "react-dom/client";
import App from "@/components/app";

export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";

createRoot(document.getElementById("root")!).render(
  <div className="[--header-height:calc(--spacing(14))]">
    <SidebarProvider className="flex flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <App />
        </SidebarInset>
      </div>
    </SidebarProvider>
  </div>
);
