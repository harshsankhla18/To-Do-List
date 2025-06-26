import { useState } from 'react';
import './index.css';
function Todo() {
  const [todos,setTodo] = useState("");
  const [works,setworks]=useState([]);
  const [k,setK]=useState(1);
  const addTodo=(e)=>{
  
   setTodo(e.target.value);
  }
 
  const addwork=(e)=>{
     e.preventDefault(); 
   
    setworks([...works,{id:k,work:todos}]);
    setK(k+1);
   
    setTodo("");
  }
  const closeTodo=(ida)=>{
    setworks(works.filter((m)=>{
      return m.id!==ida;
    } ))
  }
  
  return (
  <>
    <h3>To Do List</h3>
    <div className="containerr">
      
       
          <form className="d-flex" onSubmit={addwork} >
            <input  onChange={addTodo} value={todos}  placeholder="To do work" />
            <button className="btn btn-outline-success" type="submit">Add</button>
          </form>
       
      
     <ul className="todo-list">
      {works.map((m)=> <li key={m.id}><div className="listItem">{m.work}<button type="button" className="close" onClick={()=>closeTodo(m.id)}  aria-label="Close">x</button></div></li>)}
     </ul>
      
    </div>
</>
)

}

export default Todo
