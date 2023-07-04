import '../ToDoList/ToDoList.scss'
import React from 'react'
import { useState } from 'react'



const ToDoList = () => {
    const [state,setState] = useState('')
    const [todos,setTodos] = useState([])
    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!state.trim()){
            return alert('Malumot kiriting')
        }

        let info = {
            title: state,
            id:todos.length + 1,
            isCompleted : false
        }
        setTodos([...todos, info])

        setState([])

    }
    const handleInout = (event) => {
        setState(event.target.value)

    }
    const handleDelete = (id) => {
       let  filtered = todos.filter(todo => todo.id !== id)
       setTodos(filtered)
        
         
    }

    const editTodo = (id,title) => {
        setEdit(id)
        setValue(title)
    }
    const saveTodo = (id) => {
         let newTodo = [...todos].map((item) => {
            if(item.id == id) {
                item.title = value 
            }
            return item
         })
         setTodos(newTodo)
         setEdit(null)
    }
  return (
    <div>
        <h1>ToDoList</h1>
        
      <form className='form' onSubmit={handleSubmit}>
        <input className='input1' type="text" placeholder='TodoList' value={state} onChange ={handleInout} />
        <button className='btn' type='submit'>Submit</button>
      </form>
      <ol>
        {
             todos.map((item) => (
                <li key={item.id}>
                    {edit === item.id ?
                    <div>
                        <input className='input' value={value}  onChange={(e) =>setValue(e.target.value)}/>
                        <button className='edit' onClick={() => saveTodo(item.id)}>save</button>
                    </div> :
                      <span>{item.title}</span>
                    }

                    
                <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
                <button className='edit' onClick={() => editTodo(item.id,item.title)}>Edit</button>
                </li>
        
        ))

        }
        {/* {information} */}
      </ol>
    </div>
  )
}

export default ToDoList
 