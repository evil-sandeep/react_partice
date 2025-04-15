import React, { useState, useEffect } from 'react'

const Quoteapp = () => {

    const [qut, setQut] = useState('')
    const [auth, setAuth] = useState('')

    const fetchApi = async () => {
        try {
            const res = await fetch('https://quotes-api-self.vercel.app/quote')
            if (!res.ok) throw new Error('Failed to fetch');

            const data = await res.json()
            console.log(data)
            setAuth(data.author)
            setQut(data.quote)

        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    useEffect(() => {
        fetchApi(); //for initially call

        const intervalId = setInterval(() => {
            fetchApi();
        }, 2000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <h1>{qut}</h1>
            <h1>{auth}</h1>
        </div>
    )
}

export default Quoteapp