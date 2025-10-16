import React, { useState } from 'react'

const ShowHideText=()=>{
    
    const [show,setShow]=useState(true)

    return(
        <div className='m-3 p-3 h-3  text-center '>
            {show &&   <h1 >I'm Sandeep Kumar Sahoo</h1> }
       
         <button onClick={()=>setShow(!show)} className='border border-black rounded m-2 p-2 w-24  hover:text-red-900 hover:bg-cyan-200 text-2xl'>{show ? "HIDE":"SHOW"}</button>
        </div>
    )
}
export default ShowHideText
