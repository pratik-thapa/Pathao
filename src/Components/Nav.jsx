import React, { useState } from 'react'

export default function Nav() {
  const[nav,setNav]=useState(false)
  return (
    <>
      <div className="top p-3">
        <div className="container navbar">
          <div className="row">
            <div className="col-9 col-lg-2 logo">
            <img src={require('../img/logo.svg').default} alt="" /> 
            </div>
            <div className="col-3 col-lg-10 text-end ">
            <nav>
                <ul>
                  <li> <a href="">Services</a></li>
                  <li> <a href="">Earn with Pathao</a></li>
                  <li> <a href="">Help</a></li>
                  <li> <a href="">Blog</a></li>
                  <li> <a href="">More</a></li>
                </ul>
            </nav>
            <i  className='fa fa-bars' onClick={()=>setNav(!nav)}></i>
            </div>
            <div className="response-nav">              
                <ul className={!nav ? "": "right p-2"} >
               <i className='fa fa-times' onClick={()=>setNav(!nav)}> </i>
                  <li> <a href="">Services</a></li>
                  <li> <a href="">Earn with Pathao</a></li>
                  <li> <a href="">Help</a></li>
                  <li> <a href="">Blog</a></li>
                  <li> <a href="">More</a></li>
                </ul>
             <div className={!nav ? "":"black"} onClick={()=> (setNav(!nav))}>
              </div> 
            </div>
              
            </div>
          </div>
        </div>
      </>
  )
}
