import React from 'react'
import '../Style/Nav.css'

const Nav = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
            </div>

            <div className='nav-items'>
                <ul>
                    <li className='dropdown'>
                        <a href="#home">Home</a>
                        <ul className='dropdown-content'>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
                    </li>
                    <li>Contact</li>
                    <li>skill</li>
                    <li>about</li>
                    <li>login</li>
                </ul>
            </div>
            <h1 className='text-6xl'>hello</h1>
        </div>
    )
}

export default Nav