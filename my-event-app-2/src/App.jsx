import { useState } from 'react';
import './App.css'

function App() {

  let [username,setUsername]=useState("")
   let [fixUsername,setFixusername]=useState("")
  let count=0;
  const handleClick=()=>{
    count++;
    console.log("Button Clicked : ",count);
  }
  const handleInbuilt=()=>{
    // count--;
    console.log("InBuilt  : ",count);
  }


  const handleChange=(e)=>
  {
      console.log(e.target.value);
      setUsername(e.target.value);
  }

  const handleFixusername=()=>
  {
    setFixusername(username)
  }
  return (
    <>
     <center>
      <h1>Welcome to event app..</h1>

      <br/>
      <br/>
      {/* Direct refernce function */}
      <button onClick={handleClick}>Click Me</button>

      {/* Anoyumous function with arrow function */}
      <br/>
      <br/>
    <button onClick={()=>handleInbuilt()}>InBuilt</button>

    {/* onChange  */}
     <br/>
      <br/>
      Enter Your Name : <input type="text" value={username} onChange={handleChange} />
    <br/>
      <br/>

      <button onClick={handleFixusername}>Set Name</button>
     <br/>
      <br/>
    Username : {fixUsername}
      </center>
    </>
  )
}

export default App
