import React,{useState} from "react";


function MyToDoApp(){


  const [newToDo, setNewToDoList] = useState(null);
  const [toDoList, setToDoList] = useState([
    "Play Cricket",
    "Wash Hands",
    "Take a Ride"
  ]);

  function updateToDoList(){
    setToDoList([...toDoList,newToDo]);
    console.log('new List', setToDoList);
  }

  function deleteToDoList(ind){ 
    setToDoList(toDoList.filter((_todo, i) => i !== ind));
  }
  
return (<div style={{margin: "0 auto"}}>
    <h1>My list</h1>
    <ol>
      {toDoList.map((list,index)=>{
       return (<li key={index}>{list}<button onClick={()=>deleteToDoList(index)}>Delete</button></li>)
      })}
      </ol>
      <br/><br/>
      <h1>Add ToDoList Item</h1>
      <label>Description:</label>
      <input type="text" onChange={(val)=>{setNewToDoList(val.target.value)}}></input>
      <button onClick={()=> updateToDoList()}>Submit</button>
    
  </div>)
}

export default MyToDoApp;

