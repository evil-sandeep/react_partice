import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';
import { Link, useParams } from 'react-router-dom';
import { addItem, removeLstItem } from './cartSlice';
import { useDispatch } from 'react-redux';




const ProductInfo = () => {
    const [productInfo, setProductInfo] = useState([]);
    const { id } = useParams();

    const dispatch = useDispatch()


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${PRODUCT_API}/${id}`)
                if (!res) {
                    throw new Error();
                }
                const data = await res.json();
                setProductInfo(data)
            } catch (error) {
                console.log(error)

            }
        }
        fetchProduct()

    }, [id])


    const handleChange = (productInfo) => {
        dispatch(addItem(productInfo))
    }
    const removeLst = (productInfo) => {
        dispatch(removeLstItem
            (productInfo))
    }



    if (!productInfo) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='m-2 p-2 flex'>
                <div className='' key={productInfo.id}>
                    <h1 >Name: {productInfo.title}</h1>
                    <h1 >Brand: {productInfo.brand}</h1>
                    <h1 >Price: ${productInfo.price}</h1>
                    <h1 >Description: {productInfo.description}</h1>
                    <h1 >Rating: {productInfo.rating}</h1>

                </div>
                <div>
                    <img src={productInfo.thumbnail} alt="" />
                </div>
            </div>

            <div className='flex ' key={productInfo.id}>
                <button className='border bg-green-500 p-2 m-2 rounded-md shadow-sm flex justify-center' key={productInfo.id} onClick={() => handleChange(productInfo)}>Add To Cart</button>
                <button className='border bg-green-500 p-2 m-2 rounded-md shadow-sm flex justify-center' key={productInfo.id} onClick={() => removeLst(productInfo)}>Remove lst</button>


                <Link to='/'><button className='border bg-green-500 p-2 m-2 rounded-md shadow-sm flex justify-center'>Back</button></Link>

            </div>

        </>
    )
}

export default ProductInfo