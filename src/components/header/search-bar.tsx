import { Search } from 'lucide-react'

import { useStorageContext } from '@/context/StorageContext'
import { useNavigate } from 'react-router'

export const SearchBar: React.FC = () => {
  const { search, setSearch } = useStorageContext()
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('search')} className="max-w-2xl w-full">
      <div className="relative">
        <input
          id="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type to search..."
          className="h-10 pl-4 outline-none border w-full rounded"
        />
        <Search className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </div>
  )
}
