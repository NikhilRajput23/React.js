import React ,{useEffect, useState} from "react";
import Card from "./components/Card";
import axios from  'axios';
const App=()=>{
  const[data ,setData]=useState([])
   const getData=async()=>{
    const response=await axios.get('https://picsum.photos/v2/list');
    setData(response.data)
   };
   useEffect(()=>{
    getData();

   },[]);
   return(
   <div className="p-10">
    <div className="p-5 mt-5 bg-yellow-500 rounded">
      {
        data.map(function(elem,id){
          return(<div key={id} className="bg-white-50 text-black flex items-center gap-6 w-full px-6 py-7 rounded  mb-3">
              <img className="h-80"src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
          </div>)

        })
      }

    </div>
     </div>
 
   );
};
export default App;