import React, { useState } from 'react'

const Login2 = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handler = () => {
        if (user === '' || password === '') {
            setError('Both Filed Enter mandatory')
        } else {
            setUser('')
            setPassword('')
            setError('')
            console.log(user)
            console.log(password)
        }
    }
    return (
        <div className='border border-black space-y-3 '>

            <h1 className='flex justify-center m-2 p-2 font-extrabold text-2xl underline shadow-sm'>Login Page</h1>

            <div className='flex justify-center gap-2 '>
                <label className='font-medium shadow-sm  m-1'>UserName:</label>
                <input type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder='Enter User Name'
                    className='border border-black rounded-md shadow-md text-lime-600' />
            </div>


            <div className='flex justify-center gap-2'>
                <label className='font-medium shadow-sm  m-1'>Password:</label>
                <input type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Enter ur passwprd'
                    className='border border-black rounded-md shadow-md text-lime-600'
                />
            </div>
            <div className='flex justify-center text-red-800 underline font-extrabold'>
                {error}
            </div>

            <div className='flex justify-center'>
                <button type="button" onClick={handler} className='  bg-green-600 rounded-lg p-1 shadow-lg'> Submit</button>
            </div>

        </div>
    )
}

export default Login2