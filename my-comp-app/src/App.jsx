import './App.css'
import Electronics from './components/Electronics'
import Fashion from './components/Fashion'
import Mobiles from './components/Mobiles'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <center>
        <h1 style={{
          backgroundColor: "indigo",
          color: "white",
        }}>
        WELCOME TO AMAZON
        </h1>

        <Navbar/>
        <Mobiles/>
        <Fashion/>
        <Electronics/>
      </center>
    </>
  )
}

export default App
