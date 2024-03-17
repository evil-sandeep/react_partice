import React from 'react'
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)


    return (
        <div>This is my cart page
            <h1>{cartItems.length}</h1>\
            {cartItems.map((item) => (
                <Link to={'/product/' + item.id}>
                    <ProductItem key={item.id} {...item} />
                </Link>
            ))}
        </div>
    )
}

export default Cart