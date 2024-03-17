import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handler = () => {
        if (userName === '' || password === '') {
            setError('Fill Both Username and password')
        } else {
            setUserName('')
            setPassword('')
            setError('')
            console.log(userName)
            console.log(password)
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <div>
                <label >UserName:</label>
                <input
                    type="text"
                    placeholder='Enter ur name'
                    value={userName}
                    onChange={e => setUserName(e.target.value)} />
            </div>
            <div><label>Password:</label>
                <input
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Enter ur password' />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handler}>Loin</button>
        </div>
    )
}

export default Login