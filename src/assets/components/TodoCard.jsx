import React, { useContext } from 'react'
import { AppContext } from '../../App'
export function TodoCard({children,id}) {
  const { handleDeleteTodo, handleEditTodo } = AppContext()
  const edit = () => {}
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <img
          src="public\pencil-fill.svg"
          alt="edit"
          onClick={() => handleEditTodo(id)}
        />
        <img
          src="public\trash.svg"
          alt="delete"
          onClick={() => handleDeleteTodo(id)}
        />
      </div>
    </li>
  )
}
