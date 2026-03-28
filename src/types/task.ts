export type TaskFilterType = 'all' | 'active' | 'completed'

export type Task = {
  id: number
  title: string
  description: string
  completed: boolean
}