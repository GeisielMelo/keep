import { useStorageContext } from '@/context/StorageContext'
import { Note } from '@/components/note'

const Trash: React.FC = () => {
  const { notes } = useStorageContext()

  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
        {notes
          .filter(note => note.status == 'trash')
          .map(note => (
            <Note key={note.id} note={note} />
          ))}
      </div>
    </section>
  )
}

export default Trash
