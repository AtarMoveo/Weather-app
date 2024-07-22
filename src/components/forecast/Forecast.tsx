import { weatherService } from "../../services/weather.service"
import { StyledForecast } from "./styles"
import { useQuery } from '@tanstack/react-query'

export function Forecast() {
    const { data: weather } = useQuery({
        queryKey: ['weather'],
        queryFn: () => weatherService.fetchWeather('Tel Aviv')
    })

    if (!weather) return <div>loading...</div>
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