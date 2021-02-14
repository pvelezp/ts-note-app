import React, { ReactElement, useState } from 'react'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

function App(): ReactElement {

  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit= (e: FormElem):void =>{
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string):void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number):void =>{
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos) 
  }
  const deleteTodo = (index: number):void =>{
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos) 
  }



  return (
    <div  >
      <form onSubmit={handleSubmit} >
        <input 
        value={value}
        onChange={e=> setValue(e.target.value)}
        type="text"/>
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo,index:number) => (
          <>
           <div key={index} style={{ textDecoration: todo.complete ? 'line-through':''}}>{todo.text}</div>
           <button
           onClick={()=> completeTodo(index)}
           >{todo.complete ? 'complete':'incomplete'}</button>
           <button
           onClick={()=> deleteTodo(index)}
           >X</button>
           </>
        ))}
      </section>
    </div>
  )
}

export default App
