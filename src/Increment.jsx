import { useState } from "react";

function Increment()
{
    const[count,setCount]=useState(0)
return (
    <>
    <h1>This is a counter value:{count}</h1>
    <button style={{color:"green"}} onClick={() => setCount(count +1)}>Increment</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    </>
)
}
export default Increment;