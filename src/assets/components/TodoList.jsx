import { TodoCard } from './TodoCard';
import React from 'react'
import { AppContext } from '../../App';

function TodoList() {
  const{todos}=AppContext()
   
  return (
      <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return (
              <TodoCard key={todoIndex} id={todoIndex}>
                <p>{todo}</p>
              </TodoCard>
            )
        })}
      </ul>
   
  )
}
export default TodoList
    