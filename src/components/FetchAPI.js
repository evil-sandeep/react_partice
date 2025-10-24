import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [product, setProduct] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Api failed')
        const data = await response.json()
        setProduct(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <ol>
                {product.map((name, id) => (
                    <li key={id} className='border  m-2 p-2  w-auto'>{name.username}</li>
                ))}
            </ol>
        </div>
    )
}

export default FetchAPI