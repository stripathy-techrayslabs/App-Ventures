import React from 'react'
import { useState } from 'react';
const Events = ( {children,onstart, onstop}) => {
    const [text, settext] = useState(children);
    const change=()=>{
        settext( (prev)=> (prev === "play"? "pause":"play"))
    }
     let playing = true;
    const handle=()=>{
        if(playing) onstart()
            else onstop();
        playing =  !playing;

    }

    return(
        <>
    <button onClick={change} > {text}</button>
    <button onClick={handle}>click</button>
    
     </>
  )
}

export default Events

// we can pass custom events as props like on start, on stop