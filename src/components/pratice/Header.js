import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    return (
        <div className='m-2 p-2 border border-gray-950 h-14 shadow-sm flex justify-between bg-green-400 '>
            <div className='h-14 w-14'>
                <img className='shadow-2xl rounded' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className=''>
                <ul className='flex gap-5'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/cart'><li>Cart-{cartItems.length}</li></Link>
                    <Link to='/contact'> <li>Contact</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Header