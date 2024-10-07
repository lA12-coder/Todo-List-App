import { AppContext } from '../../App'

function TodoInput() {
  const{handleAddTodo,todoValue,setToDoValue}=AppContext()
  
  const handleChange=(e)=>{
    setToDoValue(e.target.value)

  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(todoValue.trim()){
      handleAddTodo(todoValue)
    }

  }
  

  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter todo..." value={todoValue} onChange={handleChange}  />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoInput
