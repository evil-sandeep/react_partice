import React, { useState } from 'react'
import Dropdown from './Dropdown'

const Help = () => {

    const options = [
        { label: 'red', value: 'red' },
        { label: 'yellow', value: 'yellow' },
        { label: 'blue', value: 'blue' },
        { label: 'white', value: 'white' }
    ]
    const [selectColor, setSelectColor] = useState('')
    const handleChange = (selectOption) => {
        console.log('Select Color is ', selectOption)
        setSelectColor(selectOption)
    }
    return (
        <div>
            <h1>Select An Options</h1>
            <Dropdown options={options} onSubmit={handleChange} />
            <strong> {selectColor}'s selected' </strong>
        </div>
    )
}

export default Help