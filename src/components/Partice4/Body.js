import React, { useEffect, useState } from 'react';
import { PRODUCT_API } from '../../constant';
import { Link } from 'react-router-dom';



const Body = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    const searchHandler = () => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilterProduct(filtered);
    };

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await fetch(PRODUCT_API);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data.products);
                setFilterProduct(data.products);
                console.log(data.products)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchApiData();
    }, []);

    useEffect(() => {
        searchHandler()
    }, [search, products])

    return (
        <div>
            <div>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className='border border-black rounded-md m-2 p-1 shadow-orange-50'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    type="button"
                    className='bg-green-300 p-1 rounded-md text-white'
                    onClick={searchHandler}
                >
                    Search
                </button>
            </div>
            <h1 className='h-3 p-2 font-extrabold ml-6 underline rounded-2xl text-3xl'>Latest Product</h1>
            <div className='flex flex-wrap m-3 p-3'>
                {filterProduct.map(product => (
                    <Link to={'/product/' + product.id}>
                        <div key={product.id} className='border border-black m-2 p-2 h-72 w-48 shadow-2xl rounded-md'>
                            <img src={product.images[0]} alt="product_img" className='h-3/5 w-full' />
                            <h1 className='text-pretty text-xl m-2 font-semibold'>{product.title}</h1>
                            <h1 className='text-pretty text-xl m-2 text font-semibold'>${product.price}</h1>
                        </div></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
