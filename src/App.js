import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const url="http://localhost:5001/api/hosting";
  const [data,setData]=useState([]);

  // const fetchData=()=>{
  //   return fetch(`${url}`)
  //   .then(res  =>(res.json()))
  //   .then((d) => (setData(d))); 
  // }
  const fetchData=async()=>{
    let res = await axios.get(`${url}`);
    console.log(res.data);
    setData(res.data);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div>
      {
        data.map((dataObj,index)=>{
          return(
            <>
            <p>{dataObj.name}</p>
            <p>{dataObj.email}</p>
            <p>{dataObj.password}</p>
           
            </>
          )
        })
      }
    </div>
  )
}

export default App
