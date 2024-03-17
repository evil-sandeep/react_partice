import React, { useState } from 'react'
import Dropdown from './Dropdown'

const Help = () => {
    const options = [
        { label: 'RED', value: 'red' },
        { label: 'Green', value: 'Green' },
        { label: 'blue', value: 'blue' },
        { label: 'yellow', value: 'yellow' },
    ]

    const [sltClr,setSltClr]=useState('')
const handleChange=(selectOptions)=>{
console.log('Select Color is :' + selectOptions)
setSltClr(selectOptions)
}

    return (
        <div>
            <h1>Select an Options:</h1>
            <Dropdown options={options} onSelect={handleChange} />
            <strong>{sltClr} selected !</strong>
        </div>
    )
}

export default Help