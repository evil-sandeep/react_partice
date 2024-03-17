import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';
import { Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';



const Body = () => {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);

    const handleChange = () => {
        const filtered = product.filter((p) => (
            p.title.toLowerCase().includes(search.toLowerCase())
        ));
        setFilterProduct(filtered)
    }

    console.log(search)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(PRODUCT_API);
                if (!res) {
                    throw new Error('Api Dont Work')
                }
                const data = await res.json();
                console.log(data.products)
                setProduct(data.products)

            } catch (error) {

            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        handleChange();
    }, [search, product])

    return (
        <>

            <div>
                <input type="text" className='m-4 rounded-lg p-1  stroke-lime-500 border-green-400 border   '
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
                <button className='bg-blue-400 m-2 rounded-md pl-2 pr-2 p-1' onClick={handleChange}>Search</button>
            </div>

            <div className=' flex flex-wrap gap-5 m-2 p-2 '>
                {filterProduct.map((item) => (
                    <Link key={item.id} to={'/product/' + item.id}>
                        <div className='border border-black-500 gap-3  shadow  h-72 w-48'>
                            <img src={item.images[0]} alt=" product_img" className='h-48  w-auto' />
                            <h1 className='font-semibold m-2'>{item.title}</h1>
                            <h1 className='font-mono m-2'>Price: ${item.price}</h1>
                        </div>
                    </Link>

                ))}
            </div>
        </>
    )
}

export default Body