import type { TaskFilterType } from '../types/task'

type Props = {
  filter: TaskFilterType
  onChangeFilter: (filter: TaskFilterType) => void
}

export default function TaskFilter({ filter, onChangeFilter }: Props) {
  return (
    <div className="d-flex gap-2 mb-3">
      <button
        className={`btn ${filter === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
        onClick={() => onChangeFilter('all')}
      >
        Все
      </button>

      <button
        className={`btn ${filter === 'active' ? 'btn-warning' : 'btn-outline-warning'}`}
        onClick={() => onChangeFilter('active')}
      >
        Активные
      </button>

      <button
        className={`btn ${filter === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
        onClick={() => onChangeFilter('completed')}
      >
        Выполненные
      </button>
    </div>
  )
}