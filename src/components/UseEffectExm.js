import React, { useEffect, useState } from 'react'

const UseEffectExm=()=>{
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
   const intervalId=setInterval(()=>{
    setTime(new Date())
   },1000)
   return ()=>clearInterval(intervalId)
    },[])
return(
    <div>
<h1>Currect time is :</h1>
<h2>{time.toLocaleTimeString()}</h2>
    </div>
)
    
}
export default UseEffectExm