import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoListComponent from './TodoListComponent';
import {addItem} from './appSlice'
import { nanoid } from '@reduxjs/toolkit';

function App() {

  const [todo, setTodo] = useState('')
  let dispatch = useDispatch()

  const onchangeTodo = (e) => {
    setTodo(e.target.value)
  }

  const createTodo = () => {
    let todoItem = {
      id: nanoid(),
      name: todo,
      striked: false
    }
    if(todo!=='') {
      dispatch(addItem(todoItem))
      setTodo('')
    }
  }

  return (
    <div className="App">
      <div>To do list</div>
      <input value={todo} onChange={(e)=>onchangeTodo(e)}></input>
      <button onClick={()=>createTodo()}>Add</button>
      <TodoListComponent></TodoListComponent>
    </div>
  );
}

export default App;
