import React from 'react'

const Displaybox = (props) => {
    return (
        <div>
            <h1>Display message</h1>
            <p>{props.input}</p>
        </div>
    )
}

export default Displaybox