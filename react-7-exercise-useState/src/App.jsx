import React from 'react'
import Counter from './Components/counter';
import TodoList from './Components/TodoList';
import Profile from './Components/Profile';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <section>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </section>
  )
}

export default App;
