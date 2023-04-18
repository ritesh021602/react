import React from 'react';
import { useState } from 'react';
export const Expense = () => {
    const [exp,setExp]=useState(0)
  return (
    <div>
    <h1> {exp}</h1>
        <button onClick={
            ()=>{
                setExp(exp+1);
            
            }
        }>+</button>
         <button onClick={
            ()=>{
                setExp(exp-1);
            
            }
        }>-</button>
    </div>
  )
}
