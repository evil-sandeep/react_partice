import React from 'react'
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems = useSelector(store => store.cart.item)


  return (
    <div>
      {cartItems?.map((item) => (

        <ProductItem key={item.id} {...item} />

      ))}
    </div>
  )
}

export default Cart