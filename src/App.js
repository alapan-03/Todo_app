
import logo from './logo.svg';
// import icon1 from "./icon.png"
import icon1 from "./to-do-list.png"

import './App.css';
import { useState, useReducer, useEffect } from 'react';
import List from './List';
import AddList from './AddList';
import TodoCard from './TodoCard';
import Sidebar from './Sidebar';
// import { uuid } from 'uuidv4';
// import { v4 as uuidv4 } from 'uuid'
// import createUUIDv5 from 'uuidv5';
const { v4: uuidv4 } = require('uuid');

document.body.style.overflowX = "hidden"

const getLocal = ()=>{
  let list = localStorage.getItem("lists")
  console.log(list)
  
  if(list)
  return JSON.parse(localStorage.getItem("lists"))
  else
  return []
}

function App() {
  
  const [todo2, setTodo2] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  
  const lkey = "todo"
  const [todo, setTodo] = useState(getLocal())
  
  // document.getElementsByClassName("greeting")[0].innerText = document.getElementsByClassName("greeting")[0].innerText+"."
  const l = [{
    "title": "a1",
    "sub": "hey there"
  },
{
  "title": "a2",
  "sub": "Hi hiii"
}
]


useEffect(() => {
  localStorage.setItem("lists", JSON.stringify(todo));
}, [todo]); 


function handle(lists){
  setTodo([...todo, {id: uuidv4(), ...lists}])
}

const removeContactHandler = (id) => {
  const newContactList = todo.filter((contact)=>{
    return contact.id !== id;
  })
  setTodo(newContactList)
}

const editContactHandler = (id, name) => {
  const newLi = todo.find((elem)=>{
    return elem.id === id
  })
  console.log(newLi)
}

const getTitle = (title) => {
  return title;
}

{
var today = new Date();
var time = today.getHours()}
var t1 = Number.parseInt(time)
// var t1 = 14

{var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
]};

console.log(todo)

return (
  <>
      {/* <Sidebar/> */}
      {/* <span className='container text-center pt-1' style={{display:"block", fontSize:"2.5vw", backgroundColor:"#c2271f", width:"2000px"}}>         <div style={{display:"flex", alignItems:'center', justifyContent:"center"}}><img src={icon1}></img></div>
The Todos</span> */}


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src={icon1} style={{width:"35px"}} className='mx-3'></img>
    <a class="navbar-brand mx-3 onhov" href="#">Todos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


    <div className='container px-5 pt-5 greeting' style={{fontSize:"190%"}}>
    Hi, Good {
      t1>0 && t1<12 ? "Morning": (t1>12 && t1<17? "Afternoon":"Evening")
    }...
    </div>
    <div style={{}} className='container px-5 pt-3'>{monthNames[today.getMonth()]+", "+today.getDate()}</div>
    <div className='text-center'>

      {/* <List list={todo}/>
    <AddList handler={handle}/> */}
    </div>

    {/* <div class="grid text-center">


<div class="g-col-6 g-col-md-4"><div class="card my-5 start-50" style={{width: "23rem", transform:"translate(-12vw)", boxShadow:"3px 3px black"}}>
  <div class="card-body">
    <h5 class="card-title my-2">Today :</h5>
    <p class="card-text my-4"><List list={todo}/></p>
    <AddList handler={handle}/>
  </div>
  </div>
</div>
</div> */}


<div className="grid text-center">
        <TodoCard title="Today" list={todo} handleAdd={handle} getContactId={removeContactHandler} getContactId2={editContactHandler}/>
        {/* Add more TodoCard components here for different dates */}
      </div>
    </>
  );
}

export default App;
