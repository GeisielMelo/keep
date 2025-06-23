import { useStorageContext } from '@/context/StorageContext'
import { Save } from 'lucide-react'
import { useState } from 'react'

export const AddNote: React.FC = () => {
  const { create } = useStorageContext()
  const [data, setData] = useState({ title: '', note: '' })

  const handleSubmit = () => {
    if (!data.title && !data.note) return
    create(data.title, data.note)
    setData({ title: '', note: '' })
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col max-w-[600px] w-full border rounded relative">
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={e => setData({ ...data, title: e.target.value })}
          className="px-4 py-2 border-b outline-none bg-sidebar"
        />
        <textarea
          placeholder="Note"
          value={data.note}
          onChange={e => setData({ ...data, note: e.target.value })}
          className="px-4 py-2 outline-none resize-none bg-sidebar"
        />
        <button className="absolute right-2 top-2" onClick={handleSubmit}>
          <Save size={20} strokeWidth={0.5} absoluteStrokeWidth />
        </button>
      </div>
    </div>
  )
}
