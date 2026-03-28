import { useState } from 'react'
import type { Task } from '../types/task'

type Props = {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
  onEditTask: (id: number, title: string, description: string) => void
}

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}: Props) {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const startEdit = (task: Task) => {
    setEditingTaskId(task.id)
    setEditTitle(task.title)
    setEditDescription(task.description)
  }

  const saveEdit = (id: number) => {
    if (!editTitle.trim()) {
      return
    }

    onEditTask(id, editTitle, editDescription)
    setEditingTaskId(null)
    setEditTitle('')
    setEditDescription('')
  }

  const cancelEdit = () => {
    setEditingTaskId(null)
    setEditTitle('')
    setEditDescription('')
  }

  if (tasks.length === 0) {
    return <p className="text-muted">Задач пока нет.</p>
  }

  return (
    <div className="d-flex flex-column gap-3">
      {tasks.map((task) => (
        <div key={task.id} className="card shadow-sm">
          <div className="card-body">
            {editingTaskId === task.id ? (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={editTitle}
                    onChange={(event) => setEditTitle(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editDescription}
                    onChange={(event) => setEditDescription(event.target.value)}
                  />
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => saveEdit(task.id)}
                  >
                    Сохранить
                  </button>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={cancelEdit}
                  >
                    Отмена
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5
                      className={`mb-1 ${
                        task.completed
                          ? 'text-decoration-line-through text-muted'
                          : ''
                      }`}
                    >
                      {task.title}
                    </h5>

                    <p className="mb-0 text-muted">{task.description}</p>
                  </div>
                </div>

                <div className="d-flex gap-2 mt-3">
                  <button
                    className={`btn btn-sm ${
                      task.completed ? 'btn-secondary' : 'btn-success'
                    }`}
                    onClick={() => onToggleTask(task.id)}
                  >
                    {task.completed ? 'Вернуть' : 'Выполнено'}
                  </button>

                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => startEdit(task)}
                  >
                    Изменить
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Удалить
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}