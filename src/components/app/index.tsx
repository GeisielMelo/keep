import { AddNote } from './add-note'

export const Home: React.FC = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <AddNote/>
      <p>Home</p>
    </section>
  )
}

export const Archive: React.FC = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <p>Archive</p>
    </section>
  )
}

export const Trash: React.FC = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <p>Trash</p>
    </section>
  )
}
