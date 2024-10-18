import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter ,setCounter] = useState(0);

  const addvalue = ()=>{
    setCounter(counter + 1);
    console.log(counter);
  }

  const onRemove = ()=>{
      if(counter <= 0){
        counter = 0
      }
      else{
        setCounter(counter - 1);
      }
  }

  return (
    <>
      <h1>React Course with Hitesh</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value {" "}</button>
      <button onClick={onRemove}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
