import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =  useState(15)
  
  const addValue = () => {
    if(counter < 20)
    setCounter(counter+1)
  }
  const subtractValue = () =>{
    if(counter > 0)
      counter = counter -1;
    setCounter(counter)
    
  }
  return (
    <>
     <h1>Updating Counter project</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addValue}>Increase</button>
     <br />
     <button onClick={subtractValue}>Decrease</button>
    </>
  )
}

export default App
