import React, { useState } from 'react'


export default function Playground() {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}