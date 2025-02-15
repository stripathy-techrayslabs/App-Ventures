import { useState } from "react";
const Props = ( {title,Name ,children})=>{
     
   
    return(
        <>
    <div> {title} this is to learn props . My name is {Name}  </div>
    <button> {children} </button>
   
     </>
    )
}
export default Props;