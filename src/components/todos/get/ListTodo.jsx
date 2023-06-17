import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import fetchTodos from './api';
import Button from 'react-bootstrap/Button';
import EditdTodo from '../edit/EditdTodo';
function ListTodo({ getTodos }) {

  const [todos, setTodos] = useState([]);


  // Lista los todos
  useEffect(() => {
     fetchTodos(setTodos);
  }, [todos, getTodos]); // Obtener las tareas cada vez que cambien los estados todos o getTodos

  // Deleta los todos
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3002/todos/${id}`, {
        method: "DELETE"
      })
      setTodos(todos.filter(t => t.todo_id !== id))
      console.log(deleteTodo)
    } catch (error) {
      
    }
  }

  return (
    <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/*<tr>
        <td>Lorem ipsum izjdkj hajsh jdha</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>*/}
        {todos.map((t) => {
          return (
            <tr key={t.todo_id}>
              <td>{t.description}</td>
              <td><EditdTodo t = {t} /></td>
              <td> <Button variant="danger" type='submit' onClick={() => deleteTodo(t.todo_id)}>Delete</Button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ListTodo