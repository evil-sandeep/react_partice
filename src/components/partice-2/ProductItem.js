import React from 'react'

const ProductItem = ({
    title, thumbnail, price
}) => {
    return (
        <>
            <div className='flex gap-8 '>
                <div className='flex border border-green-600 w-7/12 gap-1 '>
                    <img className='h-20 w-20 ' src={thumbnail} alt="Product img" />
                    <h1 className='m-3 p-3 font-bold'>{title}</h1>
                    <h1 className='font-serif m-3 p-3'>price: ${price}</h1>
                </div>
                <div className='border border-gray-900 w-4/12 text-center font-extrabold text-4xl '>
                    Checkout
                </div>
            </div>

        </>
    )
}

export default ProductItem