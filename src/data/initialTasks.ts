import type { Task } from '../types/task'

export const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Изучить роутинг',
    description: 'Понять как работают страницы в React Router',
    completed: false,
  },
  {
    id: 2,
    title: 'Сделать добавление задачи',
    description: 'Реализовать форму и useState',
    completed: true,
  },
]