import TodoInput from './assets/components/TodoInput'
import TodoList from './assets/components/TodoList'
import { useContext, useState, createContext, useEffect } from 'react'

export const MainContext = createContext()
export const AppContext = () => useContext(MainContext)
// Creating the function containing the whole app

function App() {
  // Create a variable to control the state of the todos

  const [todos, setTodos] = useState([])
  const [todoValue,setToDoValue]=useState('')

  function persistData(newList){
    localStorage.setItem("todos",JSON.stringify({todos:newList}))
  }

  // create a function to handle the addition of a new todo

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo]
    persistData(newTodos)
    setTodos(newTodos)
    setToDoValue('')
  }
// Create a function that handles the deletion of new todos


  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList) 


  }
// create a function that handles editing of existing todos
  function handleEditTodo(index) {
   const valueToBeDeleted = todos[index]
   setToDoValue(valueToBeDeleted)
   handleDeleteTodo(index)
  }
// Load data from the local storage
useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos=localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
  
},[])
  return (
    <MainContext.Provider
      value={{
        handleAddTodo,
        handleDeleteTodo,
        todos,
        handleEditTodo,
        todoValue,
        setToDoValue,
      }}
    >
      <section className='container'>

      <TodoInput />
      <TodoList />
      </section>
    </MainContext.Provider>
  )
}

export default App
