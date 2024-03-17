import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCT_API } from '../../constant';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ProductInfo = () => {
    const [product, setProduct] = useState();

    const { id } = useParams();

    const dispatch = useDispatch();
    const addItems = () => {
        dispatch(addItem(product))
    }

    useEffect(() => {
        const fetchProductByID = async () => {
            try {
                const response = await fetch(`${PRODUCT_API}/${id}`);
                if (!response.ok) {
                    throw new Error('API request failed');
                }
                const data = await response.json();
                setProduct(data);

            } catch (error) {
                console.error('Api error' + error)

            }
        };
        fetchProductByID();
    }, [id]);



    return (
        <>
            <div className=' flex  text-3xl m-2 p-2  font-extralight jus gap-96 '>
                <Link to='/'>  <button className='block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Back</button></Link>
                <h1 className='block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Details Of {product?.title}</h1>


            </div>
            <div className='flex'>

                <div className='w-4/6'>
                    <div className=' border border-black m-2 p-2  flex gap-2'>

                        <img src={product?.thumbnail} alt="Product_image" className='h-60' />
                        <div className='flex-col'>
                            <h1 className='font-medium text-xl' > Price: {product?.price}</h1>
                            <h1 className='font-medium text-xl'  >Name: {product?.title}</h1>
                            <h1 className='font-medium text-xl' >Description: {product?.description}</h1>
                        </div>

                    </div>
                    <h3 className='m-2 p-2 font-extrabold text-pretty text-xl'>More Images </h3>
                    <div className='flex flex-row  p-2 m-2 border border-black gap-x-7'>
                        {product?.images?.map((image, id) => (
                            <img key={id} src={image} alt={`Thumbnail ${id}`} className='h-32' />
                        ))}
                    </div>
                </div>
                <div className='w-2/6 border border-black mt-2 h-96 flex flex-col '>
                    <h1 className='text-center font-extrabold text-2xl  underline'>Proceed to Checkout</h1>
                    <button type="button" className='block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-32 justify-center  ml-44  ' onClick={addItems}>Add To Cart</button>
                </div>
            </div>
        </>
    );
};

export default ProductInfo;
