
import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';
import { Link } from 'react-router-dom';


const Body = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);
    console.log(search)

    const handleChange = () => {
        const filtered = products.filter((item) => (
            item.title.toLowerCase().includes(search.toLocaleLowerCase())
        ))
        setFilterProducts(filtered)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(PRODUCT_API)
                if (!res) {
                    throw new Error('Api Error');
                }
                const data = await res.json();
                console.log(data.products)
                setProducts(data.products)
            }
            catch (error) {

            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        handleChange();
    }, [search, products])
    return (
        <>
            <div className='gap-4'>
                <input className='border rounded-md border-blue-500 gap-3'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className='bg-blue-500 gap-1  m-2'
                    onClick={handleChange}


                >Search</button>
            </div>
            <div className='flex flex-wrap gap-7 m-2 p-2'>
                {filterProducts.map((p) => (
                    <Link to={"/product/" + p.id}>
                        <div className='border h-80 w-40 shadow' key={p.id}>
                            <img className='h-48 w-40' src={p.images[0]} alt="" />
                            <br />
                            <h1 >{p.title}</h1>
                            <h4>Price ${p.price}</h4>
                        </div></Link>
                ))}

            </div>
        </>
    )
}

export default Body