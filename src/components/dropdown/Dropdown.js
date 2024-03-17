import React, { useState } from 'react'

const Dropdown = ({ options, onSelect }) => {
    const [selectOptions, setSelectOptions] = useState('')

    const handleOptions = (option) => {
        setSelectOptions(option)
        onSelect(option)
    }
    return (
        <select value={selectOptions} onChange={e => handleOptions(e.target.value)}>
            <option value="">Select an option</option>
            {options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

export default Dropdown