import React from 'react'
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div>This is my cart page
            <h1>Cart Items-{cartItems.length}</h1>            
            {cartItems.map((i) => (
                <ProductItem key={i.id} {...i} />
            ))}
        </div>
    )
}

export default Cart