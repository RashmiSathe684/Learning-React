import React, { useState } from 'react'
import './App.css'

import iphone1 from './assets/iphone1.webp'
import iphone2 from './assets/iphone2.webp'
import iphone3 from './assets/iphone3.webp'
import iphone4 from './assets/iphone4.webp'
import iphone5 from './assets/iphone5.webp'

function App() {

  const iphones = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      color: "Orange",
      image: iphone1
    },

    {
      id: 2,
      name: "iPhone 17 Air",
      color: "Silver",
      image: iphone2
    },

    {
      id: 3,
      name: "iPhone 17",
      color: "Pink",
      image: iphone3
    },

    {
      id: 4,
      name: "iPhone 17e",
      color: "Black",
      image: iphone4
    },

    {
      id: 5,
      name: "iPhone 16",
      color: "Green",
      image: iphone5
    }
  ]

  const [index, setIndex] = useState(0)

  const nextImage = () => {

    if(index === iphones.length - 1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
  }

  const previousImage = () => {

    if(index === 0){
      setIndex(iphones.length - 1)
    }
    else{
      setIndex(index - 1)
    }
  }

  return (

    <center>

      <h1>Apple iPhone Gallery</h1>

      <h2>{iphones[index].name}</h2>

      <h3>Color : {iphones[index].color}</h3>

      <img
        src={iphones[index].image}
        alt=""
        width="800px"
        height="500px"
      />

      <br /><br />

      <button
        onClick={previousImage}
        style={{
          backgroundColor: "red",
          color: "white",
          marginRight: "10px",
          padding: "10px"
        }}
      >
        Previous
      </button>

      <button
        onClick={nextImage}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px"
        }}
      >
        Next
      </button>

    </center>
  )
}

export default App
// ihpone1- iphone 17 pro max
//iphone2 - ihpone air
// iphone3 -iphone 17
// iphone4 - iphone17e
// iphone5- iphone16