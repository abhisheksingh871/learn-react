import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  const [Initial_count, setCounter] = useState(12);
  // let Initial_count = 12;
  const addValue = () => {
    console.log("value added", Initial_count); 
    if(Initial_count < 20)
      setCounter(Initial_count +1)
  }
  const subtract = () => {
    console.log("Value reduced : ", Initial_count)
    if(Initial_count > 0)
        setCounter(Initial_count-1)
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Manage Counter</h1>
      <h2>Initial Count : {Initial_count}</h2>
      <button
      onClick={addValue}
      >Increase Count</button>
      <br />
      <button
      onClick={subtract}
      >Decrease Count</button>
    </>
  )
}

export default App
