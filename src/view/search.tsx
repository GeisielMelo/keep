import { Note } from '@/components/note'
import { useStorageContext } from '@/context/StorageContext'

const Search: React.FC = () => {
  const { search, notes } = useStorageContext()

  const searched = notes.filter(
    note =>
      note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      note.note.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  )

  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      {search ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
          {searched.map(note => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center grow text-zinc-400">
          <p>Use the search bar at the top of the page to search.</p>
        </div>
      )}
    </section>
  )
}

export default Search
