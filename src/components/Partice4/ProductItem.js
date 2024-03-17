import React from 'react'

const ProductItem = ({
    title, thumbnail, price
}) => {
    return (
        <>
            <div className='flex  '>
                <div className='flex border border-green-600 w-7/12 gap-1 '>
                    <img className='h-20 w-20 ' src={thumbnail} alt="Product img" />
                    <h1 className='m-3 p-3 font-bold'>{title}</h1>
                    <h1 className='font-serif m-3 p-3'>price: ${price}</h1>
                </div>

            </div>
            <div className='justify-end '>
                Checkout
            </div>
        </>
    )
}

export default ProductItem