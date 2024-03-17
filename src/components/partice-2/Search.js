import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch]=useState('');

    const handleChange=({product})=>{
        const filtered=product.filter((p)=>p.title.toLowerCase().includes(search.toLocaleLowerCase));
        setSearch(filtered)
    };

    return (
        <div>
            <input type="text" className='m-2 rounded-lg'
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            
            />
            <button className='bg-blue-400 m-2 rounded-md pl-2 pr-2' onChange={handleChange}>Search</button>
        </div>
    )
}

export default Search