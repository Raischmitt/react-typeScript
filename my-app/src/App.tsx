import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTdoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTdoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
