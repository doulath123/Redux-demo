import React from 'react'

function TodoInput() {
    const [title, setTitle]=React.useState('')
  return (
    <div>
        <h1>Add Todo</h1>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='add something'/>
      <button>ADD</button>
    </div>
  )
}

export default TodoInput