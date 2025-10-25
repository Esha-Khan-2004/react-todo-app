import React, { useState } from "react";


function MyToDoApp() {


  const [newToDo, setNewToDoList] = useState(null);
  const [tempToDo, setTempToDo] = useState("");
  const [tempToDoIndex, setTempToDoIndex] = useState(null);
  const [toDoList, setToDoList] = useState([
    "Play Cricket",
    "Wash Hands",
    "Take a Ride"
  ]);

  function saveToDoItem() {
    setToDoList([...toDoList, newToDo]);
    console.log('new List', setToDoList);
    setNewToDoList("");
  }

  function deleteToDoList(ind) {
    setToDoList(toDoList.filter((_todo, i) => i !== ind));
  }

  function updateToDoList(value,index) {
    setTempToDo(value);
    setTempToDoIndex(index);
  }

  function updateToDoItem(){
    setToDoList(toDoList.map((td, index)=>{
      if(index === tempToDoIndex){
        return tempToDo;
      }
      else{
        return td;
      }
    }));
    setTempToDo("");
    setTempToDoIndex(null);
  }

  return (<div style={{
    width: "100vw", display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <h1>My list</h1>
    <ol>
      {toDoList.map((list, index) => {
        return (<li key={index}>{list} 
        {/* <button style={{ background: "lightgreen", marginLeft: "5px", marginBottom: "5px", width: "fit-content" }}
         onClick={() => updateToDoList(list,index)}>Update</button> */}
        <button style={{ background: "red", marginLeft: "5px", marginBottom: "5px", width: "fit-content" }}
         onClick={() => deleteToDoList(index)}>Delete</button></li>)
      })}
    </ol>
    <br /><br />
    <h1>Add ToDoList Item</h1>
    <label>Description: </label>
    <input type="text" value={newToDo} onChange={(val) => { setNewToDoList(val.target.value) }}></input>
    <br></br>
    <button style={{ background: "lightblue" }} onClick={() => saveToDoItem()}>Submit</button>
    {/* <h1>Update ToDoList Item</h1>
    <label>Description: </label>
    <input type="text" value={tempToDo}  onChange={(val) => { setTempToDo(val.target.value) }}></input>
    <br></br>
  <button style={{ background: "lightgreen" }} disabled={tempToDo.length == 0} onClick={() => updateToDoItem()}>Update</button> */}

  </div>)
}

export default MyToDoApp;

