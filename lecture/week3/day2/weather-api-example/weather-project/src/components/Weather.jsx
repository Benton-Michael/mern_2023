import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const latitude = 34.052234; // Use lat. of desired location
    const longitude = -118.243685; // Use long. of desired location
    const apiKey = 'd89c14768a1947aa393a65c1e9c0586a';

    useEffect(() => {

        axios
            .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            )
            .then((response) => {
                setWeatherData(response.data)
            })
            .catch((err) => {
                // also try
                console.error('Error getting weather data', err);

                console.log('Error fetching weather data', err);
            });


    }, [latitude, longitude, apiKey]);
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Weather Info!</h1>
            <p>Location: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp} Celcius</p>
            <p>Weather: {weatherData.weather[0].description} </p>
        </div>
    );
}

export default Weather;