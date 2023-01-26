import React, { useContext, useState } from 'react'
import { TodosContext } from './App'
import { Table, Form, Button } from 'react-bootstrap'

function ToDoList(){
    const {state, dispatch} = useContext(TodosContext); 
    const [todoText, setTodoText] = useState("")    
    const [editMode, setEditMode] = useState(false)    
    const [editTodo, setEditTodo] = useState(null)    
    const buttonTitle = editMode ? "Edit" : "Add";

    const handleSubmit = event => {
        event.preventDefault();
        if(editMode){            
            dispatch({type: 'edit', payload: {...editTodo,text:todoText}})
            setEditMode(false)
            setEditTodo(null)
        }
        else{
            dispatch({type: 'add', payload: todoText})
        }            
        setTodoText("")
    }
      
    return(
        <div>
            {state.todos.map(todo =>(
                <li key={todo.id}>
                    <span>{todo.text}</span>
                </li>
            ))}          
        </div>
    )
}

export default ToDoList;