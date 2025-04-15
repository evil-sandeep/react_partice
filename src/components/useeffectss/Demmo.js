import React,{useState,useEffect} from 'react'

const Demmo=()=>{

    const[cTime,setCtime]=useState(new Date().toLocaleString())

    useEffect(()=>{
setInterval(()=>{
setCtime(new Date().toLocaleString())
},1000)
    })

    return(
        <div>
            <h1>{cTime}</h1>
            <button onClick={()=>setCtime(new Date().toLocaleString())}>Increment</button>
        </div>
    )

}

export default Demmo;