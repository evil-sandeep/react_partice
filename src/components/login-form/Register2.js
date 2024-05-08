import React, { useState } from 'react'

const Register2 = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handler = (e) => {
        e.preventDefault();
        let errMessage = '';

        if (userName === '') {
            errMessage += 'User name required';
        }
        if (userEmail === '') {
            errMessage += 'User Email required';
        }
        if (userPassword === '') {
            errMessage += 'Password must contain'
        }
        if (confirmPassword !== userPassword) {
            errMessage += 'Pasword Not match'
        }
        
        setError(errMessage)

        if (errMessage === '') {
            console.log('Form Submited successfully')
        }
    }
    return (
        <div>
            <form onSubmit={handler}>
                <div>
                    <label >Name:-</label>
                    <input type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder='Name'
                    />
                </div>
                <div>
                    <label >Email:-</label>
                    <input type="email"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                        placeholder='email'
                    />
                </div>
                <div>
                    <label >password:-</label>
                    <input type="text"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        placeholder='Passwordd'
                    />
                </div>
                <div>
                    <label >confirm password:-</label>
                    <input type="text"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder=' confirm Passwordd'
                    />
                </div>
                <div className='text-black bg-red-600'>{error}</div>
                <div><button>submit</button></div>
            </form>

        </div>
    )
}

export default Register2