import { useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { SearchBar } from './search-bar'
import { Menu } from 'lucide-react'

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu />
        </Button>
        <h1 className="text-lg font-semibold">KEEP</h1>
        <div className="flex w-full justify-center items-center px-4">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
