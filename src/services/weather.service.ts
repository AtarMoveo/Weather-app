import { LocationOption, Weather } from "../data/types"

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
export const weatherService = {
  fetchWeather,
  fetchLocationOptions
}

async function fetchWeather(location: string) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`);
    if (!response.ok) {
      throw new Error('An error occurred while fetching weather data')
    }
    const data = await response.json()
    return _convertWeatherDataFormat(data)
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function fetchLocationOptions(searchTerm: string): Promise<LocationOption[]> {
  console.log(searchTerm)
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${searchTerm}`);
    if (!response.ok) {
      throw new Error('An error occurred while fetching location options')
    }
    const data = await response.json()
    console.log(data)
    return data.map((loc: any) => ({
      _id: loc.id,
      name: loc.name,
      country: loc.country,
      url: loc.url
    }))
  } catch (error) {
    console.error(error)
    throw error
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