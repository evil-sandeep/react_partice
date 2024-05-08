import React, { useState } from 'react'

const Weatther = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false)

    const API_KEY = '417a4a4d7aa73f244674cff9d5155a72'
    const fetchWeatherDetails = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            throw new Error('Api key not work')
        }
        const data = await response.json();
        setWeather(data)
        // console.log(data)
    }
    // fetchWeatherDetails()
    const handler = () => {

    }
    return (
        <div>Weatther</div>
    )
}

export default Weatther