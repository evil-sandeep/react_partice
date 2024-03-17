import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ProductInfo = () => {
    const [pInfo, setPInfo] = useState([]);
    const { id } = useParams();
    console.log(id)

    const dispatch = useDispatch();


    useEffect(() => {
        const productInfo = async () => {
            const data = await fetch(`${PRODUCT_API}/${id}`)
            const json = await data.json();
            setPInfo(json);
            console.log(json)
        }
        productInfo()
    }, [id])

    const addProduct = (pInfo) => {
        dispatch(addItem(pInfo))

    }
    return (
        <>
            <h1 className=' flex justify-around  font-extrabold text-2xl underline mb-2'> Product ID:{pInfo.id}</h1>

            <div className='flex justify-between'>
                <div className=' h-96 border m-2 p-2 shadow-lg ml-20   '>
                    <h1>Name : {pInfo.title}</h1>
                    <h1>Brand :   {pInfo.brand}</h1>
                    <h1>Category : {pInfo.category}</h1>
                    <h1>Description   : {pInfo.description}</h1>
                    <h1>Price :${pInfo.price}</h1>
                    <h1>Rating  :  {pInfo.rating}*</h1>
                    <h1>Available : {pInfo.stock}</h1>
                    <h1>Discont : {pInfo.discountPercentage}</h1>
                    <button className='bg-green-600 rounded-lg p-2   m-2 cursor-default' key={pInfo.id} onClick={() => addProduct(pInfo)}>Add Item</button>

                </div>
                <div className='mr-20' >
                    <img className='h-96 w-80 ' src={pInfo?.thumbnail} alt="" />
                </div>
            </div>

        </>
    )
}

export default ProductInfo