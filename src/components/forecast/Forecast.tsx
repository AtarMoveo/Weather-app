import { useEffect } from "react"
import { useQuery } from '@tanstack/react-query'

import { weatherService } from "../../services/weather.service"

import { StyledForecast } from "./styles"

interface ForecastProps {
    location: string
}

export function Forecast({ location }: ForecastProps) {
    console.log(location)
    const { data: weather, isPending, isError, error, refetch } = useQuery({
        queryKey: ['weather'],
        queryFn: () => weatherService.fetchWeather(location)
    })

    useEffect(() => {
        refetch()
    }, [location])

    if (isError) return <div>{error.message}</div>
    if (isPending || !weather) return <div>Loading...</div>
    return <StyledForecast>
        <h1 className="weather-location">{weather.name}, {weather.country}</h1>
        <h1 className="weather-temp">{weather.tempInC}<span>°C</span></h1>
        <img src={weather.icon} alt="weather-condition" />
        <h2>{weather.condition}</h2>
        <h2 className="weather-details"><span>Wind: {weather.windKph}kph </span>
            <span>Humidity: {weather.humidity}% </span>
            <span>Feels like: {weather.feelslikeInC}°C</span>
        </h2>
    </StyledForecast>
}