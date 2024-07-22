import { Weather } from "../data/typs"

const WEATHER_API_KEY = '9f84001d91e64e6da1d64420242107'
export const weatherService = {
    fetchWeather,
}

async function fetchWeather(location: string) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`);
        if (!response.ok) {
            throw new Error('An error occurred while fetching weather data');
        }
        const data = await response.json();
        return _convertWeatherDataFormat(data)
    } catch (error) {
        console.error(error);
    }
}

function _convertWeatherDataFormat(weatherData: any): Weather {
    return {
        name: weatherData.location.name,
        country: weatherData.location.country,
        condition: weatherData.current.condition.text,
        tempInC: weatherData.current.temp_c,
        icon: weatherData.current.condition.icon,
        windKph: weatherData.current.wind_kph,
        humidity: weatherData.current.humidity,
        feelslikeInC: weatherData.current.feelslike_c
    }
}