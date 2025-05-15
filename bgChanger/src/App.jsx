
import React from "react"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("skyblue")
  const[text, setText] = useState("EveryThing is Calm")
  const buttons = [
    {color : "red", text : "Blood BAth🔥🐦‍🔥"},
    {color : "green", text : "Here Comes the spring🍏🟢"},
    {color : "yellow", text : "what a shitty background it is🤮🤢"},
    {color : "pink", text : "considered to be fav of half of the population stereotypically👧👧"},
    {color : "black", text : "for knowing the context of this color please choose pink BG👦👦"},
    {color : "olive", text : "Don't have much idea about this one😵😵"},
    {color : "gray", text : "It looks like graphite✏️✏️"},
  ]

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-semibold text-gray-800">
            <h1>{text}</h1>
          </p>
        </div>
        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
          px-3 py-2 rounded-2xl">
            {/* <button
              onClick={() => setColor(buttons.color)}
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button
              onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button
              onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button
              onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
            <button
              onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
            <button
              onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>
            <button
              onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" style={{backgroundColor:"black"}}>Black</button> */}

            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => {
                  setColor(btn.color);
                  setText(btn.text);
                }}
                className={`outline-none px-4 py-1 rounded-full shadow-lg ${btn.color === "yellow" ? "text-black" : "text-white"
                }`}
                style={{ backgroundColor: btn.color }}
              >
                {btn.color}
              </button>
            ))}




          </div>
        </div>
      </div>
    </>
  )
}

export default App
