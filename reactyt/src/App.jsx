import React ,{useState}from "react";

function App(){
  const [a,setA]=useState(0);
  return(
  <div>
     <h1 className="text-5xl bg-pink-700">value a is {a}</h1>
    <button onClick={()=>setA(a+10)}>increment</button>
     <button onClick={()=>setA(a-10)}>decrement</button>
    </div> )
}
export default App