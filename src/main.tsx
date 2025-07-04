import '@/styles/index.css'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from './components/ui/theme-provider'
import { BrowserRouter, Routes, Route } from 'react-router'
import { StorageProvider } from './context/StorageContext'
import { AppSidebar } from './components/sidebar'
import { SiteHeader } from './components/header'
import { createRoot } from 'react-dom/client'
import Archive from './view/archive'
import Search from './view/search'
import Trash from './view/trash'
import Home from './view/home'

export const iframeHeight = '800px'
export const description = 'A sidebar with a header and a search form.'

createRoot(document.getElementById('root')!).render(
  <div className="[--header-height:calc(--spacing(14))]">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <StorageProvider>
        <BrowserRouter>
          <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="/trash" element={<Trash />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </StorageProvider>
    </ThemeProvider>
  </div>,
)
