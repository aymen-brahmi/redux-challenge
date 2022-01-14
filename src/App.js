
import './App.css';
import Add from './Components/add';
import Todolist from './Components/todolist';
import {useState} from 'react';
 
function App() {
  const [todos, setTodos] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);


  return (
    <div className="App">
      <Add/>
      <Todolist todos={todos}/>
    </div>
  );
}

export default App;
