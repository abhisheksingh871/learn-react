import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username : "Abhishek",
    age : 22
  }
  let arr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card channel = "mokey A" price = "$230" id = "#345"/>
      <Card channel="monkey B" price="$250" id= "#346"/>
      <Card channel="monkey C" price="$210" id="#347" />
        
    </>
  )
}

export default App
