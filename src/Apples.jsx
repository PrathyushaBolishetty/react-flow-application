import { useState } from "react";

function Apple()
{
    const[apples,setApples]=useState(0)
    return(
        <>
        <h1>Apples count:{apples}</h1>
        {apples===0? (
            <p>No apples left</p>
        ):(
            <p>Great!You have some apples..</p>
        )
        }
        <button onClick={()=> setApples(apples+1)}>Add 1 Apple</button>
        <button onClick={()=> apples>0 && setApples(apples-1)}>Remove 1 Apple</button>
        <button onClick={()=> setApples(0)}>Reset</button>
        </>
    )
}
export default Apple;