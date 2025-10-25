/**
 * Simple Form Validation

Create a small form with:

Name and Email input fields

A Submit button
When the user clicks submit:

If any field is empty → show error message: “All fields are required!”

Otherwise → show “Form submitted successfully!”
 */

import React, { useState } from 'react'


const SimpleFormValidation = () => {
    const [name, setName] = useState('')
    const [emial, setEmail] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = () => {
        if (!name.trim() && !emial.trim()) {
            setErr('All fields required')
            return
        }

        if (!emial.endsWith('@gmail.com')) {
            setErr('Please enter emaild ends with @gmail.com')
            return
        }

        setErr('From submit success')
        alert(`Hay ${name} Your email address is ${emial}`)
    }
    return (
        <div>
            <input type="text"
                value={name}
                placeholder='name'
                onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="email"
                value={emial}
                placeholder='name'
                onChange={(e) => setEmail(e.target.value)} />

           {name.length>0 && emial.length>0 && (<button onClick={handleSubmit}>Submit</button> )} 

            <h1>{err}</h1>

        </div>
    )
}
export default SimpleFormValidation