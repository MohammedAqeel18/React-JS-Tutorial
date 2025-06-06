import React, { useState } from 'react'

const Content = () => {
  const [name, setName]= useState("Earn");
  function handleNameChange() {
    const names= ["Earn", "Give","Grow"];
    const int = Math.floor(Math.random()*3);
    setName (names[int]);
  }
 
 const [count , setCount]= useState(100);
 
 function incrementFunction(){
  setCount (prevCount=> prevCount+1);
 }

 function decrementFunction(){
  setCount(prevCount=>prevCount-1);
 }
  return (
    <main className='App'> 
      <p> lets {name} money</p>
    <button onClick={handleNameChange}> susbsrcibe</button>
    <button onClick={decrementFunction}> - </button>
    <span >{count}</span>
    <button onClick={incrementFunction}> + </button>
 
   </main>
  )
}
export default Content