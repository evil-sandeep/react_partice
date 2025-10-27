import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState('')

    const filterData = product.filter(i =>
        i.username.toLowerCase().includes(search.toLowerCase())
    )

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Api not load')
        const data = await response.json()
        setProduct(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div><input type="search" className='border p-2' value={search} onChange={(e) => setSearch(e.target.value)} /></div>
            <ol>
                {filterData.map((name) => (
                    <li key={name.id} className='border  m-2 p-2  w-auto'>{name.username}</li>
                ))}
            </ol>
        </div>
    )
}

export default FetchAPI