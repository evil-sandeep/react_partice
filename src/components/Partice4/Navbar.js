import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const cartItems = useSelector(store => store.cart.item)
    console.log(cartItems)
    return (
        <div className='border border-black m-2 p-4 flex justify-between shadow-md  bg-slate-300'>
            <div className='shadow hover:scale-110 transition-transform duration-300 object-cover '>
                <Link to='/home'><img src="https://icons4web.com/wp-content/uploads/2017/11/Demo-image-icon-205318.jpg" alt="logo.png" className='h-12 w-12  rounded-2xl' /></Link>
            </div>
            <div className='flex flex-row list-none gap-3 underline cursor-pointer'>
                <Link to='/home'><li className=' hover:scale-110 transition-transform duration-500 '>Home</li></Link>
                <Link to='/about'><li className=' hover:scale-110 transition-transform duration-500 '>About</li></Link>
                <Link to='/contact'><li className=' hover:scale-110 transition-transform duration-500 '>Contact</li></Link>
                <Link to='/cart'> <li className=' hover:scale-110 transition-transform duration-500 '>Cart {cartItems.length}</li></Link>
            </div>
            <div className=''><h2 className='bg-blue-600 m-2 p-1 text-center text-slate-50 rounded-md'>Login</h2>

            </div>
        </div>
    )
}

export default Navbar