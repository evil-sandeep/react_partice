import React, { useState } from 'react'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConPassword, setUserConPassword] = useState('')
    const [error, setError] = useState('')

    const handler = (e) => {
        e.preventDefault(); // Prevent form submission
        let errorMessage = '';

        if (userName === '') {
            errorMessage += 'User Name Must Enter. ';
        }

        if (userEmail === '') {
            errorMessage += 'User Email Must Enter. ';
        }

        if (userPassword === '') {
            errorMessage += 'Password Must Enter. ';
        }

        if (userConPassword !== userPassword) {
            errorMessage += 'Passwords Do Not Match.';
        }

        setError(errorMessage);

        // If no error, you can proceed with form submission or other actions
        if (errorMessage === '') {
            console.log('Form submitted successfully');
            // Add your form submission logic here
        }
    }

    return (
        <div className='border border-black gap-4'>
            <h1 className='flex justify-center underline'>Registration Page</h1>
            <form onSubmit={handler}>
                <div className='flex justify-center'>
                    <label>Name:</label>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder='Enter your name' />
                </div>
                <div className='flex justify-center'>
                    <label>Email:</label>
                    <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder='Enter your email' />
                </div>
                <div className='flex justify-center'>
                    <label>Password:</label>
                    <input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder='Enter password' />
                </div>
                <div className='flex justify-center'>
                    <label>Confirm Password:</label>
                    <input type="password" value={userConPassword} onChange={e => setUserConPassword(e.target.value)} placeholder='Confirm password' />
                </div>
                <div className='text-black bg-red-600'>{error}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;
