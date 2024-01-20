import { useState } from "react";

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  return(
    <div>
       <p> HELLO I Am page </p>
       <h2>Counter: {counter}</h2>
       <button className="btn btn-primary" onClick={()=> setCounter(counter+1)}>
        Increase
       </button>
       <button className="btn btn-primary" onClick={()=> setCounter(counter-1)}>
        Decrease
       </button>
    </div>
  )}
export default HomePage;