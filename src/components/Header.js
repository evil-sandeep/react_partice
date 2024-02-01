import React, { useState } from 'react'
import  '../Style/Header.css'
const Header = () => {
     const [search ,setSearch]=useState('');

    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTum7XcGyd_xHXf7lS5js2-mNIPrfBIzg4LHVykWTM2-g&s" alt=" logo" />
            </div>
            <div className='srch-box'>
                <input 
                type="text" 
                name="search" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)} />
                <button>Search</button>
            </div>
            
            <div className='navitem'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact</li>
                </ul>

            </div>
        </div>

    )
}

export default Header