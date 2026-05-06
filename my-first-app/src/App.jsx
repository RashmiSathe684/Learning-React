import { useState } from 'react';
import './App.css'

function App() {
//code before return is code of js
let name="Rashmi";
let count=0;
let [cnt,setCnt]=useState(0)
const handleIncrease=()=>{
  count++;
  console.log("Button CLicked :"+count+" times");
  setCnt(cnt+1);
  console.log(cnt);
}

const handleDecrease=()=>{
  count--;
  console.log("Button CLicked :"+count+" times");
  setCnt(cnt-1);
  console.log(cnt);
}

  return (
    //and code inside <> </> is code of html
    <>
      <h1>Welcome to my 1st app {name}!</h1>
      <button onClick={handleIncrease}>Increase</button>
       <button onClick={handleDecrease}>Decrease</button>

      Count :{count}
      <br></br>
      Cnt : {cnt}
    </>
  )
}

export default App
