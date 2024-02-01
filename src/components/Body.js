import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../constant';

const Body = () => {
    const [products, setProducts] = useState([]);

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
    return (
        <div className='flex flex-wrap gap-7 m-2 p-2'>
            {products.map((p) => (
                <div className='border h-80 w-40 shadow'>
                    <img className='h-48 w-40'  src={p.images[0]} alt="" />
                    <br />
                    <h1 >{p.title}</h1>
                    <h4>Price ${p.price}</h4>
                </div>
            ))}





        </div>
    )
}

export default Body