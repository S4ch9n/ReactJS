import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  //name 
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('name');
    return saved ? JSON.parse(saved) : '';
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])
  const handleName = ((e) => {
    setName(e.target.value)
  });
  const clearName = () => {
    setName("")
  }

  //count
  const [count, setCount] = useState(() => {
    const initalCount = 10;
    return initalCount;
  })
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  }
  const reset = () => {
    setCount(0);
  }

  //taks
  const [inputTask, setInputTask] = useState(""); //input field
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  }); //list of task

  const handleInput = ((e) => {
    setInputTask(e.target.value);
  })

  const addTask = () => {
  const trimmedTask = inputTask.trim();
  if (trimmedTask === "") return;

  // Case-insensitive duplicate check
  if (tasks.some(task => task.toLowerCase() === trimmedTask.toLowerCase())) return;
  //.some() is a JavaScript array method that returns true as soon as one item in the array passes the test.

  setTasks([...tasks, trimmedTask]); // add to array
  setInputTask(""); // clear input
};
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const clearAll = () => {
    setName('');
    setCount(0);
    setInputTask('');
    setTasks([]);
    localStorage.removeItem('name');
    localStorage.removeItem('tasks');
  };

  return (
    <div>

      <h1>Hello :  {name}</h1>
      <input type='text' value={name} placeholder='enter name' onChange={handleName} />
      <button onClick={clearName}>clear name</button>


      <h2>Count is : {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h3>Add a Tasks</h3>
      <input
        type='text'
        value={inputTask}
        onChange={handleInput}
        placeholder='Enter task' />

      <button onClick={addTask}>Add task</button>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>
        })}
      </ul>

      <button onClick={clearAll}>clear all</button>
    </div>
  )
}

export default Dashboard
