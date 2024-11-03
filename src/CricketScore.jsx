import { useState } from "react";

function CricketScore(){
    const [score,setScore]=useState(0)
    const incrementby1=()=>{
        setScore(score+1);
    }
    const incrementby2=()=>{
        setScore(score+2);
    }
    const incrementby3=()=>{
        setScore(score+3);
    }
    const incrementby4=()=>{
        setScore(score+4);
    }
   const incrementby6=()=>{
        setScore(score+6);
    }
    return(
        <>
        <h1>This is a Score:{score}</h1>
        <button style={{color:"blue"}} onClick={incrementby1}> +1</button>
        <button style={{color:"pink"}} onClick={incrementby2}> +2</button>
        <button style={{color:"green"}} onClick={incrementby3}> +3</button>
        <button style={{color:"red"}} onClick={incrementby4}> +4</button>
        <button style={{color:"yellow"}} onClick={incrementby6}> +6</button>
        <button onClick={() =>setScore(0)}>Rest Score</button>
        </>
    )
}
export default CricketScore;