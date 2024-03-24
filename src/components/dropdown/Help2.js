import React, { useState } from 'react'

const Help2 = () => {
    const options = [
        { label: 'red', value: 'red' },
        { label: 'sand', value: 'sand' },
        { label: 'yellow', value: 'yellow' },
        { label: 'blue', value: 'blue' },
        { label: 'white', value: 'white' },
        { label: 'black', value: 'black' },
    ]

    const [selectOptions, setSelectOptions] = useState('')
    const [displayClr, setDisplayClr] = useState('')

    const handleChange = (o) => {
        setSelectOptions(o)
        setDisplayClr(o)
    }

    return (
        <>
            <h1>Select An Options</h1>
            <select value={selectOptions} onChange={e => handleChange(e.target.value)}>
                <option value="">Select Any Color</option>
                {options.map((color) => (
                    <option value={color.value} key={color.value}>{color.label}</option>
                ))}
            </select>
            <strong>{displayClr} selected ............... </strong>
        </>
    )
}

export default Help2