import React from 'react'
import Date from './date';
import { useState } from 'react'

export const Expenseitem = () => {
    const [item,setItem]=useState("");
    const[show,setShow]=useState("");
    const [nums,setNums]=useState([]);
    const ar=nums.map((index, ind)=>{
      return <li  key={ind}>{index}</li>
    })
   
  return (
    <div>
        <div>
            
            <label >Select-item</label>
            <input onChange={(e)=>{
                setItem(e.target.value);
            }}></input>
            <button onClick={()=>{
               setNums([...nums,item])
               setItem("");
            
            }}> Submit</button>
          
           <ul>{ar}</ul>
        </div>
    </div>
  )
} 
