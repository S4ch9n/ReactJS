import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input) return
    setTasks([...tasks, { text: input, done: false }])
    setInput('')
  }

  const toggleTask = (i) => {
    setTasks(tasks.map((t, idx) => idx === i ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, idx) => idx !== i))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTask(i)}>{t.text}</span>
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App