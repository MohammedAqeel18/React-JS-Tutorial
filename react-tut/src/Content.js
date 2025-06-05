import React from 'react'

const Content = () => {
  function handleNameChange() {
    const names= ["Study", "Practice","Earnby"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <main className='App'> 
      <p> lets {handleNameChange()}  react </p>
    </main>
  )
}
export default Content