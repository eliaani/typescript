import React, { useState } from 'react';
import Todotable from './Todotable';

export type Todo = {
  date: string;
  description: string;
  priority: string;
}

function Todolist() {
  const [todo, setTodo] = useState<Todo>({ date: '', description: '', priority: '' });
  const [todos, setTodos] = useState<Todo[]>([]);

  const inputChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index: number) => {
    const todos2 = todos.filter((todo, i) => i !== index);

    setTodos(todos2);
  }

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
      <button onClick={addTodo}>Add</button>
      <Todotable todos={todos} deleteTodo={deleteTodo} />

    </div>
  );
};

export default Todolist;