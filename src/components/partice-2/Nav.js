import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Nav = () => {

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    return (
        <div className=' border border-black m-2 p-2 flex  justify-between bg-green-500'>
            <div>
                <Link to='/'>  <img className='h-10 w-10 rounded-sm shadow-sm' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="logo" /></Link>
            </div>
            <div className=''>
                <ul className='flex gap-5'>
                    <Link to='/' ><li>Home</li></Link>
                    <Link to='/cart' > <li>cart -{cartItems.length} </li></Link>
                    <Link to='/contact' > <li>contact</li></Link>


                </ul>
            </div>
        </div>
    )
}

export default Nav