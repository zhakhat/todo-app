import TaskForm from '../components/TaskForm'
import type { Task } from '../types/task'

type Props = {
  tasks: Task[]
  onAddTask: (title: string, description: string) => void
}

export default function HomePage({ tasks, onAddTask }: Props) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const activeTasks = tasks.filter((task) => !task.completed).length

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h1 className="mb-3">Todo App</h1>
            <p className="text-muted">
              Простое приложение для управления задачами на React, TypeScript и Bootstrap.
            </p>

            <div className="mt-4">
              <p className="mb-2"><strong>Всего задач:</strong> {totalTasks}</p>
              <p className="mb-2"><strong>Активных:</strong> {activeTasks}</p>
              <p className="mb-0"><strong>Выполненных:</strong> {completedTasks}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <TaskForm onAddTask={onAddTask} />
      </div>
    </div>
  )
}