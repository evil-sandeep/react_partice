import React,{useState} from 'react'

const Cntr = () => {
    const [cnt,setCnt]=useState(0)

    return(
        <div>
          

          <button onClick={()=>setCnt(cnt+1)}>increment</button>
          <h1>{cnt}</h1>
          <button onClick={()=>setCnt(cnt-1)}>Decrement</button>

        </div>
    )
}

export default Cntr