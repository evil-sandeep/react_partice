import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../constant';
import '../Style/Body.css'

const Search = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(PRODUCT_API)
                if (!response) {
                    throw new Error('Error Network Requested')
                }
                const data = await response.json();
                console.log(data)
                setProductList(data)
            } catch (error) {
                console.log(error + "Api Requested failed")
            }
        }

        fetchData()
    }, [])
    return (
        <>

            <div className='productlist-container'>
                {productList.map((item) => (
                    <h4 key={item.id}>{item.title} -{item.price}</h4>
                ))}
            </div>
        </>
    )
}

export default Search