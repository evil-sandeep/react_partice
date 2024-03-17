import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';
import { Link } from 'react-router-dom';


const Body = () => {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);

    const handleChange = () => {
        const filtered = product.filter((p) => (
            p.title.toLowerCase().includes(search.toLocaleLowerCase())
        ))
        setFilterProduct(filtered)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(PRODUCT_API);
                if (!res) {
                    throw new Error('Api IS Not Ok')
                }
                const data = await res.json();
                setProduct(data.products)
                console.log(data.products)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        handleChange();
    }, [search, product])


    return (<>

        <div>
            <input type="text"
                placeholder='Search Product'
                className='border border-green-600 m-2 p-1 rounded-lg text-slate-800 hover:divide-blue-500'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='bg-green-800 m-2 p-1 rounded-md text-cyan-300 cursor-pointer' onClick={handleChange}>Search</button>
        </div>

        <div className=' flex flex-wrap gap-6 m-2 p-2 '>
         
            {filterProduct.map((item) => (
                 <Link to={'/product/'+item.id} key={item.id}>
                <div className='h-60 w-48 border border-green-500  shadow-md'>
                    <img className='h-40 w-60 p-1' src={item.images[0]} alt="" />
                    <h1 className='font-semibold'>{item.title}</h1>
                    <h1 className='font-mono'> Price: ${item.price}</h1>

                </div>
                </Link>
            ))}
            
        </div>
    </>
    )
}

export default Body