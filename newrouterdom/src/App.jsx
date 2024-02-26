import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-orange-700 text-center py-4'>App Working...</h1>
    </>
  )
}

export default App
