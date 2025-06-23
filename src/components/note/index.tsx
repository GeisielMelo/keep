import { Archive, ArchiveRestore, Trash, Undo2 } from 'lucide-react'
import { useStorageContext } from '@/context/StorageContext'
import React, { useState, useRef } from 'react'

export const Note: React.FC<{ note: INote }> = ({ note }) => {
  const { remove, update } = useStorageContext()
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(note.title || '')
  const [desc, setDesc] = useState(note.note || '')
  const titleInputRef = useRef<HTMLInputElement>(null)
  const descInputRef = useRef<HTMLTextAreaElement>(null)
  const blurTimeout = useRef<NodeJS.Timeout | null>(null)

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

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => {
      if (document.activeElement !== titleInputRef.current && document.activeElement !== descInputRef.current) {
        setIsEditing(false)
        if (title !== note.title || desc !== note.note) update(note.id, { ...note, title, note: desc })
      }
    }, 0)
  }

  const handleFocus = () => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current)
    }
  }

  return (
    <div className="flex flex-col h-52 rounded border p-2 overflow-clip gap-2 relative">
      {isEditing ? (
        <>
          <input
            ref={titleInputRef}
            className="break-words border-b outline-none w-full mb-1"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoFocus
          />
          <textarea
            ref={descInputRef}
            className="break-words border-b outline-none w-full resize-none overflow-auto grow"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            onBlur={handleBlur}
            onFocus={handleFocus}
            rows={2}
          />
        </>
      ) : (
        <>
          {note.title && (
            <span className="break-words cursor-pointer hover:underline" onClick={() => setIsEditing(true)}>
              {note.title}
            </span>
          )}
          {note.note && (
            <p className="break-words overflow-auto cursor-pointer hover:underline" onClick={() => setIsEditing(true)}>
              {note.note}
            </p>
          )}
        </>
      )}
      <div className="absolute bottom-0 left-0 w-full flex flex-row justify-end gap-2 p-2 bg-sidebar text-zinc-400">
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
