import React, { useState, useEffect } from 'react'


const Joke = () => {

    const [jokes, setJokes] = useState('')
    const [punch, setPunch] = useState('')
    const [showPunch, setShowPunch] = useState(false)
    const [slNo,setSlNo]=useState()
    const [errs, setErrs] = useState(null)

    const fetchApi = async () => {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/random_joke')
            if (!res.ok)
                return setErrs('APi not work properly')
            const data = await res.json()
            setJokes(data.setup)
            setPunch(data.punchline)
            setSlNo(data.id)
            console.log(data)
        } catch (err) {
            console.log(err)
            setErrs("some error on api")
        }
    }

    useEffect(() => {
        fetchApi()
        const intervalId = setInterval(() => {
            fetchApi()
    }, 5000)
        return () => clearInterval(intervalId)
    }, [])

    const tglPunch = () => {
        setShowPunch(prev => !prev)
    }
    const nextJoke = () => {
        fetchApi()
    }

    return (<div>
        <h3 className="text-3xl font-bold underline"> Joke no .{slNo}</h3>
        <h1>{showPunch ? punch : jokes}</h1>  <br /><button onClick={nextJoke} >Click TO next Joke</button>
        <hr />
        <button onClick={tglPunch} className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
            {showPunch ? "back to joke" : "show punch line"}
        </button>
    </div>)
}

export default Joke