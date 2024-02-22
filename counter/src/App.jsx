import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount= ()=>{
    return(
    
      setCount((count) => count + 1)

      
    )
  }
  
  const removeCount= ()=>{
    return(
      setCount((count)=> count >1 ? (count-1) : 0)
    )
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value : <span>{count}</span></h2>
    <div className="btn">
      <button onClick={addCount}>Add To Count</button>
      <br/>
      <button onClick={removeCount}>Remove To Count </button>
      <br/>
      <button onClick={()=>(setCount((count)=> count=0))}>Reset</button>
    </div>
    </>
  )
}

export default App
