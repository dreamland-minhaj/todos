import { useDispatch } from 'react-redux'
import './App.css'
import Todos from './components/todos/Todos'
import { useEffect } from 'react';
import { getAllTodos } from './App/Feature/Todos/todosSlice';
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getAllTodos())
  },[]);

  return (
   <>
   <Todos/>
   </>
  )
}

export default App
