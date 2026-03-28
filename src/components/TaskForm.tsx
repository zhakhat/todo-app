import { useState } from 'react'

type Props = {
  onAddTask: (title: string, description: string) => void
}

export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    onAddTask(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">Добавить задачу</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Название</label>
            <input
              type="text"
              className="form-control"
              placeholder="Например: сделать домашку"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Описание</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Короткое описание"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Добавить задачу
          </button>
        </form>
      </div>
    </div>
  )
}