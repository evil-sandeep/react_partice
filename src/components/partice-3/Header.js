import React, { useState } from 'react'

const Header = ({ country }) => {// for props

    const [name, setName] = useState('sandeep')//state

    const toggleName = () => {
        setName(prevName => prevName === 'sandeep' ? 'chandan' : 'sandeep')// for togglename
    }
    return (
        <>
            <div>Hello {name} u from {country}</div>
            <button className='bg-green-400 rounded shadow-sm' onClick={toggleName}>change name</button>
        </>
    )
}

export default Header