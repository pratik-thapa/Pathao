import React, { useEffect, useState } from 'react'

export default function Top() {
    const[Top,settop]=useState(false);

    useEffect(()=>{
    window.addEventListener('Scroll',()=>{
        if(window. scrollY < 150){
            settop(true);
        }
        else{
            settop(false);
        }
    })
    },[])
   const scrollup=()=>{
    window.scrollTo({
        top:0,
        behaviour:"smooth",
    })
   }
  return (
    <>
    {settop &&(
    
    <button onClick={scrollup} style={{position:"fixed",right:"30px",bottom:"50px", border:"none"}} className="bg-danger p-2" ><i class="fa fa-arrow-up text-light" aria-hidden="true"></i></button>
   ) }
    
    </>
  )
}
