import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =useState(15)

  // let counter = 15
  const addValue = () => {
    // console.log("value added", counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React with Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value {counter }</button>
      <br/>
      <button onClick={removeValue}>
        Remove Value</button>
    </>
  )
}

export default App
