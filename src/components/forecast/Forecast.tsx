import { Dispatch, SetStateAction, useEffect } from "react"
import { useQuery } from '@tanstack/react-query'

import { weatherService } from "../../services/weather.service"

import { Location, LocationOption } from "../../data/types"

import { StyledForecast } from "./styles"

interface ForecastProps {
    location: Location
    queryKey: string
    setRecentLocationSearch: Dispatch<SetStateAction<LocationOption[]>>
}

export function Forecast({ location, queryKey, setRecentLocationSearch }: ForecastProps) {
    const { data: weather, isPending, isError, error, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: () => weatherService.fetchWeather(location)
    })

    useEffect(() => {
        refetch()
    }, [location])

    useEffect(() => {
        if (weather && queryKey === 'weather') {
            const { name, country, latitude, longitude } = weather
            const _id = Date.now()
            const newLocation = { _id, name, country, latitude, longitude }

            setRecentLocationSearch((prevLocations) => {
                const locationExists = prevLocations.some(
                    (location) => location.name === newLocation.name && location.country === newLocation.country)
                if (!locationExists) {
                    const locationsToDisplay = prevLocations.length > 4 ? prevLocations.slice(0, 4) : prevLocations
                    return [newLocation, ...locationsToDisplay]
                } else {
                    return prevLocations
                }
            })
        }
    }, [weather])

    if (isError) return <div>{error.message}</div>
    if (isPending || !weather) return <div>Loading...</div>
    return <StyledForecast>
        <h1 className="weather-location">{weather.name}, {weather.country}</h1>
        <h1 className="weather-temp">{weather.tempInC}<span>°C</span></h1>
        <img src={weather.icon} alt="weather-condition" />
        <h2>{weather.condition}</h2>
        <h2 className="weather-details"><span>Wind: {weather.windKph}kph </span>
            <span>Humidity: {weather.humidity}% </span>
            <span>Feels like: {weather.feelsLikeInC}°C</span>
        </h2>
    </StyledForecast>
}