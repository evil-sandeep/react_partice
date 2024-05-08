import React, { useState } from 'react'


const Weatherr = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false)

    const API_KEY = '417a4a4d7aa73f244674cff9d5155a72' 


    const fetchData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            throw new Error('Api key doesnt work')
        }
        const data = await response.json();
        setWeather(data)
        console.log(data)
        setError('')
    }



    const handler = (e) => {

        e.preventDefault();
        fetchData()
    }

    return (
        <div>

            <h1>Weather app</h1>
            <form onSubmit={handler}>
                <input type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder='Enter ur city details'
                />
                <button type='submit'>generate</button>

            </form>
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <h3> {weather.name}</h3>
                    <h4>{weather.main?.temp}</h4>
                </div>
            )
            }
        </div>
    )
}

export default Weatherr