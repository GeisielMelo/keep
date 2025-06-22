type TStatus = 'active' | 'archive' | 'trash'

interface INote {
  id: string
  title: string
  note: string
  status: TStatus
}
