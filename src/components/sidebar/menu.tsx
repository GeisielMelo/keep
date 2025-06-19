import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Archive, Home, Trash } from 'lucide-react'
import { useNavigate } from 'react-router'

const items = [
  { title: 'Notas', url: '/', icon: Home },
  { title: 'Arquivo', url: '/archive', icon: Archive },
  { title: 'Lixeira', url: '/trash', icon: Trash },
]

export const SidebarAppMenu: React.FC = () => {
  const navigate = useNavigate()

  return (
    <SidebarMenu>
      {items.map(item => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild className='rounded-full bg-[#425bb2] hover:bg-[#425bb2]/80 active:bg-[#425bb2]/80 h-12 transition-all text-white hover:text-white'>
            <button className='px-4 py-4' onClick={()=> navigate(item.url)}>
              <item.icon />
              <span>{item.title}</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
