import React, { useState } from 'react'

const Dropdown = ({ options, onSubmit }) => {
    const [selectOption, setSelectOption] = useState('')

    const handleChnage = (option) => {
        setSelectOption(option)
        onSubmit(option)
    }

    return (
        <select value={selectOption} onChange={e => handleChnage(e.target.value)} id="">
            <option value="">Select an Option</option>
            {options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

export default Dropdown