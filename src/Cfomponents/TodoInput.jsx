import React from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { addTodo } from '../Redux/action';
function TodoInput() {
    const [title, setTitle]=React.useState('')
    const dispatch=useDispatch();
    const handleAdd=()=>{
      const payload={
        title,
        status:false,
        id:uuid()
      };
      const addTodoAction=addTodo(payload)
      dispatch(addTodoAction)
    };
  return (
    <div>
        <h1>Add Todo</h1>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='add something'/>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput