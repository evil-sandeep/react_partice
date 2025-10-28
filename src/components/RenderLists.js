import React,{useState} from 'react'

const RenderLists=()=>{
    const [item,setItem]=useState(["Apple", "Banana", "Orange", "Mango"])
    const [search,setSearch]=useState('')

    const filterData=item.filter((i=>
        i.toLowerCase().includes(search.toLowerCase())
    ))
  


    return (
        <div>
<input className='border m-2 p-2 ' type="search" value={search}  onChange={(e)=>setSearch(e.target.value)}/>

            {filterData.map((p,i)=>(
                <li key={p} className='border p-2 m-2 bg-slate-500 text-white '>{p}</li>
            ))}

        </div>
    )
}

export default RenderLists