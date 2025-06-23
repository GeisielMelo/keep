import { useStorageContext } from '@/context/StorageContext'
import { Archive, ArchiveRestore, Trash, Undo2 } from 'lucide-react'
import React from 'react'

export const Note: React.FC<{ note: INote }> = ({ note }) => {
  const { remove, update } = useStorageContext()

  const handleUpdate = (note: INote) => {
    return update(note.id, { ...note })
  }

  const handleDelete = (note: INote) => {
    if (note.status != 'trash') {
      return update(note.id, { ...note, status: 'trash' })
    }

    return remove(note.id)
  }

  const handleArchive = (note: INote) => {
    if (note.status == 'archive') {
      return update(note.id, { ...note, status: 'active' })
    }

    return update(note.id, { ...note, status: 'archive' })
  }

  return (
    <div className="flex flex-col h-52 rounded border p-2 overflow-clip gap-2 relative">
      {note.title && <span className="break-words">{note.title}</span>}
      {note.note && <p className="break-words overflow-auto">{note.note}</p>}
      <div className="absolute bottom-0 left-0 w-full flex flex-row justify-end gap-2 p-2 bg-white text-zinc-400">
       
       
        {note.status != 'trash' && (
          <button onClick={() => handleArchive(note)} className="hover:text-amber-800 transition-all">
            {note.status == 'archive' ? <ArchiveRestore size={16} /> : <Archive size={16} />}
          </button>
        )}
        
        <button onClick={() => handleDelete(note)} className="hover:text-red-400 transition-all">
          <Trash size={16} />
        </button>

        {note.status == 'trash' && (
          <button onClick={() => handleUpdate({ ...note, status: 'active' })} className="hover:text-green-400 transition-all">
            <Undo2 size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
