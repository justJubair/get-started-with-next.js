"use client"
import { useState } from "react";

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  return(
    <div>
       <p> HELLO I Am page </p>
       <h2>Counter: {counter}</h2>
      <div className="p-4">
      <button className="btn mx-2 btn-primary" onClick={()=> setCounter(counter+1)}>
        Increase
       </button>
       <button className="btn btn-primary" onClick={()=> setCounter(counter-1)}>
        Decrease
       </button>
      </div>
    </div>
  )}
export default HomePage;