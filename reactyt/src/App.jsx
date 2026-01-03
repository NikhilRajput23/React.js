import React from 'react';
const App=()=>{
  const submitH=()=>{
    console.log("Hello World");
  }
  return(<div><form className='flex flex-col' onSubmit={submitH}>
    <input className="px-3 py-4 text-xl m-10"type="text" placeholder='Enter a Input'/>
    <button type="submit" className='px-3 py-4 m-10 border-white rounded text-xl font-semibold'>Submit</button>
    </form></div>)
}
export default App;