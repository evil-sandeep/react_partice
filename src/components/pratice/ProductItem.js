import React from 'react'

const ProductItem = ({
    title, thumbnail, price
}) => {
    return (
        <div className='flex m-2 border border-black w-5/12'>
            <img className='h-16 p-1 shadow-sm round' src={thumbnail} alt="" />
            <h2 className='font-mono font-semibold mt-4 ml-5'>{title}</h2>
            <h2 className='font-mono font-semibold mt-4 ml-5'>Price-${price}</h2>
        </div>
    )
}

export default ProductItem