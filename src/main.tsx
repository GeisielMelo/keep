import '@/styles/index.css'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { BrowserRouter, Routes, Route } from 'react-router'
import { StorageProvider } from './context/StorageContext'
import { AppSidebar } from './components/sidebar'
import { SiteHeader } from './components/header'
import { createRoot } from 'react-dom/client'
import { Tab } from '@/components/tab'

export const iframeHeight = '800px'
export const description = 'A sidebar with a header and a search form.'

createRoot(document.getElementById('root')!).render(
  <div className="[--header-height:calc(--spacing(14))]">
    <StorageProvider>
      <BrowserRouter>
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <Routes>
                <Route path="/" element={<Tab status="active" />} />
                <Route path="/archive" element={<Tab status="archive" />} />
                <Route path="/trash" element={<Tab status="trash" />} />
              </Routes>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </StorageProvider>
  </div>,
)
