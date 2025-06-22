import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

export type StorageContextType = {
  notes: INote[]
  create: (title: string, note: string) => void
  update: (id: string, updatedFields: Partial<INote>) => void
  remove: (id: string) => void
}
export type StorageProviderProps = { children: ReactNode }

const StorageContext = createContext<StorageContextType | undefined>(undefined)
const STORAGE_KEY = 'notes'

const getNotesFromStorage = (): INote[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const setNotesToStorage = (notes: INote[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [notes, setNotes] = useState<INote[]>(getNotesFromStorage())

  // CREATE
  function create(title: string, note: string) {
    if (!title && !note) throw new Error('cannot be empty')
    const newNote: INote = { title, note, id: uuidv4(), status: 'active' }
    const updated = [...notes, newNote]
    setNotes(updated)
    setNotesToStorage(updated)
  }

  // UPDATE
  function update(id: string, updatedFields: Partial<INote>) {
    const updated = notes.map(note => (note.id === id ? { ...note, ...updatedFields } : note))
    setNotes(updated)
    setNotesToStorage(updated)
  }

  // DELETE
  function remove(id: string) {
    const updated = notes.filter(note => note.id !== id)
    setNotes(updated)
    setNotesToStorage(updated)
  }

  return (
    <StorageContext.Provider value={{ notes, create, update, remove }}>
      {children}
    </StorageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStorageContext = (): StorageContextType => {
  const context = useContext(StorageContext)
  if (context === undefined)
    throw new Error('useStorageContext must be used within an StorageProvider')

  return context
}
