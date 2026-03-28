import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'
import type { Task } from './types/task'
import { initialTasks } from './data/initialTasks'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return initialTasks
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }

    setTasks((prevTasks) => [newTask, ...prevTasks])
  }

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const editTask = (id: number, title: string, description: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title, description }
          : task
      )
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <div className="container py-4">
        <Routes>
          <Route
            path="/"
            element={<HomePage tasks={tasks} onAddTask={addTask} />}
          />
          <Route
            path="/tasks"
            element={
              <TasksPage
                tasks={tasks}
                onAddTask={addTask}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
                onEditTask={editTask}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}