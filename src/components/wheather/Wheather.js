import React, { useState } from 'react'

const Wheather = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')

    const API_KEY = ' 417a4a4d7aa73f244674cff9d5155a72'

    const fetchWeather = async () => {
        const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response) {
            throw Error('Api key dont work')
        }
        const data = await response.json();
        setWeather(data)
        console.log(data)
        setError('')
    }

    const handler = (e) => {
        e.preventDefault();
        fetchWeather()
    }
    return (
        <div>
            <h1>Wether Track</h1>

            <form onSubmit={handler}>
                <input type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder='ENTER UR CITY NAME' />
                <button type='submit'>Generate</button>
            </form>

 {error && <p>{error}</p>}
            {weather && (
                <div>
                    <h3>{weather.name}</h3>
                    <p>{weather.main.temp}</p>
                </div>
            )}
        </div>
    )
}

export default Wheather