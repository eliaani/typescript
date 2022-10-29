import React from 'react'
import { Todo } from './Todolist'

type Props = {
  todos: Todo[];
  deleteTodo: (index:number) => void;
}
function Todotable({todos, deleteTodo}: Props) {
  return (
    <table>
      <tr><td style={{ width: '110px' }}>Date</td><td style={{ width: '175px' }}>Description</td><td>Priority</td></tr>
      <tbody>
        {
          todos.map((todo, index) =>
            <tr key={index}> <td>{todo.date}</td> <td>{todo.description}</td> <td>{todo.priority}</td>
              <button onClick={() => deleteTodo(index)}>Delete</button> </tr>)
        }
      </tbody>
    </table>
  )
}

export default Todotable