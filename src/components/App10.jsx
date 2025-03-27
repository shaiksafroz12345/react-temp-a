import React from 'react'
import { useState } from "react";
export default function App10() {
  const [number, setNumber] = useState(0);
  return (
    <div>
        <h3>This is App10</h3>
        <p>
            <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
        </p>
        {number}
    </div>
  )
}
