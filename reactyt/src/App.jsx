import React ,{useState} from "react";
const App=()=>{
  const[user,setUser]=useState("")
  const submitH=(e)=>{
    e.preventDefault();
    console.log(user);
    setUser('');
  }
  return(<div className="min-h-screen bg-color-black flex items-center justify-center">
    <form onSubmit={submitH}className="flex flex-col gap-4"
>
<input 
value={user}
onChange={(e)=>setUser(e.target.value)}
className="px-3 py-3 text-lg rounded-lg w-[350px]" type="text"
placeholder="Enter a name"
></input>
<button type="submit" className="px-3 py-3 text-lg font-semibolde border border-white text-white rounded-lg hover:bg-white hover:text-black">submit</button>
    </form>
  </div>)
}
export default App;