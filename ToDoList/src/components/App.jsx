import React,{useState} from "react";
import ToDoItem from "./toDoItem";

function App() {

  const[list,setList]=useState("");
  function change(event){
    setList(event.target.value)
  }

  const[item,addItem]=useState([]);
  function add(){
    addItem(prevItem =>{ 
    return [...prevItem,list];
    });
    setList("");
  }

  function deleteItem(id){

    addItem((prevItem) => {
        return prevItem.filter((item,index) => {
          return index ==!id
        })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={change} type="text" value={list} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            item.map((todoItem,index) => (
              <ToDoItem 
              key={index} 
              id={index} 
              text={todoItem} 
              onChange={deleteItem} />
            ))
          }
          
        </ul>
      </div>
    </div>
  );
}

export default App;
