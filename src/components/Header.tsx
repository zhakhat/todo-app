import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Todo App
        </NavLink>

        <div className="navbar-nav">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/tasks" className="nav-link">
            Задачи
          </NavLink>
          <NavLink to="/about" className="nav-link">
            О проекте
          </NavLink>
        </div>
      </div>
    </nav>
  )
}