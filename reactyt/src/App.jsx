import React ,{useState} from "react";
import Card from "./components/Card";
import axios from  'axios';
const App=()=>{
  const[data,setData]=useState([])
  const getData=async()=>{
    const response=await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }
  return(
    <div className="p-10">
    <button onClick={getData}className='bg-teal-600 text-white font-semibold text-xl rounded px-6 py-6'>get data</button>
    <div className="p-5 m-5 bg-yellow-950">
{
  data.map(function (elem,idx){

    return(<div key={idx} className="bg-white-50 text-black flex items-center gap-6 w-full px-6 py-7 rounded  mb-3">
      <img className="h-80 "src={elem.download_url} alt=""/>
      <h1 className="text-xl font-semibold">{elem.author}</h1>
    </div>)
  })
}

    </div>
    </div>
  )
}
export default App;