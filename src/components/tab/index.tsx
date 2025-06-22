import { useStorageContext } from '@/context/StorageContext'
import { AddNote } from './add-note'
import { Note } from './note'

export const Tab: React.FC<{ status: TStatus }> = ({ status }) => {
  const { notes } = useStorageContext()

  console.log(notes)

  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      {status == 'active' && <AddNote />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
        {notes
          .filter(note => note.status == status)
          .map(note => (
            <Note key={note.id} note={note} />
          ))}
      </div>
    </section>
  )
}
