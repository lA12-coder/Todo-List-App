import React, { useContext } from 'react'
import { AppContext } from '../../App'
export function TodoCard({children,id}) {
  const { handleDeleteTodo, handleEditTodo } = AppContext()
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <img
          src="./images/pencil-fill.svg"
          alt="edit"
          onClick={() => handleEditTodo(id)}
        />
        <img
          src="./images/trash.svg"
          alt="delete"
          onClick={() => handleDeleteTodo(id)}
        />
      </div>
    </li>
  )
}
