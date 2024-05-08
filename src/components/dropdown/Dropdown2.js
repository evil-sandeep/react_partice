import React, { useState } from 'react'

const Dropdown2 = () => {
    const options = [
        { label: 'red', value: 'red' },
        { label: 'blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'black', value: 'black' },
        { label: 'white', value: 'white' },
    ]

    const [selectClr, setSelectClr] = useState('')
    const [disClr, setDisClr] = useState('')

    const handler = (color) => {
        setSelectClr(color)
        setDisClr(color)
    }
    console.log(disClr)

    return (

        <div>
            <select value={selectClr} onChange={e => handler(e.target.value)}>
                <option value="">Select Any clr</option>
                {options.map((c) => (

                    <option value={c.value} key={c.value}>{c.label}</option>
                ))}
            </select>
            <strong>{disClr} selected....</strong>

        </div>
    )
}

export default Dropdown2
