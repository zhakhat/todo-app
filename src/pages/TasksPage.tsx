import { useMemo, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskFilter from '../components/TaskFilter'
import TaskList from '../components/TaskList'
import type { Task, TaskFilterType } from '../types/task'

type Props = {
  tasks: Task[]
  onAddTask: (title: string, description: string) => void
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
  onEditTask: (id: number, title: string, description: string) => void
}

export default function TasksPage({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}: Props) {
  const [filter, setFilter] = useState<TaskFilterType>('all')

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed)
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    }

    return tasks
  }, [tasks, filter])

  return (
    <div>
      <h1 className="mb-4">Список задач</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <TaskForm onAddTask={onAddTask} />
        </div>

        <div className="col-md-8">
          <TaskFilter filter={filter} onChangeFilter={setFilter} />
          <TaskList
            tasks={filteredTasks}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        </div>
      </div>
    </div>
  )
}