import React, { useState } from 'react'

const Data = (props) => {
    const [product, setProduct] = useState([
        'apple', 'orange', 'mango'
    ])
    const newP = product.map((p, i) => (
        <li key={i}> {p}</li>
    ))

    switch (props.isAdmin) {
        case true: return newP
            break;
        case false: <h1>no data</h1>
            break;
        default: return null
    }




}
export default Data