import React from 'react'

const BootNav = () => {
    return (
        <div className=''>
            <div className='flex justify-between border m-2 p-2'>
                <div className='h-15 w-10'>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="logo" />
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BootNav