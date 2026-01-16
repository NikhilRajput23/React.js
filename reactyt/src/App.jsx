import React, { useState } from 'react'

const App = () => {
const[a,setA]=useState(10);
  const change =()=>{
    setA(10+a)
  }
  const changeA=()=>{
    setA(a-10)
  }
  return (
    <div><h1>Username {a}</h1>
    <button onClick={change}>Increment</button>
    <button onClick={changeA}>Decrement</button>
    </div>
  )
}

export default App