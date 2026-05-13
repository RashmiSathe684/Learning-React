import './App.css'

function App() {


  let count=0;
  //setinterval and settimeout
  function greet()
  {
    console.log("Greetings..");
    count++;
  }

  // setTimeout(greet,2000);
  console.log("Hello")



  //setInterval
  // setInterval(greet,2000);

  //clearInterval
  // let id=setInterval(greet,1000);

  let id=setInterval(() => {
    greet();
    if(count>5)
  {
    clearInterval(id);
  }
  }, 2000);


  return (
    <>
      <center>
        <h1>WELCOME TO EVENTS APP..</h1>
      </center>
    </>
  )
}

export default App
