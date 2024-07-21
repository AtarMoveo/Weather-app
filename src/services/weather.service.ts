import { Weather } from "../data/typs"

export const weatherService = {
    query
}

const weatherAPI = {
    location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1721548856,
        localtime: "2024-07-21 9:00"
    },
    current: {
        last_updated_epoch: 1721548800,
        last_updated: "2024-07-21 09:00",
        temp_c: 19.5,
        temp_f: 67,
        is_day: 1,
        condition: {
            text: "Overcast",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
            code: 1009
        },
        wind_mph: 8.9,
        wind_kph: 14.4,
        wind_degree: 324,
        wind_dir: "NW",
        pressure_mb: 1010,
        pressure_in: 29.84,
        precip_mm: 0,
        precip_in: 0,
        humidity: 62,
        cloud: 100,
        feelslike_c: 19.5,
        feelslike_f: 67,
        windchill_c: 19.5,
        windchill_f: 67,
        heatindex_c: 19.5,
        heatindex_f: 67,
        dewpoint_c: 12.1,
        dewpoint_f: 53.7,
        vis_km: 10,
        vis_miles: 6,
        uv: 4,
        gust_mph: 10.3,
        gust_kph: 16.6
    }
}

function query(): Weather {
    return {
        name: weatherAPI.location.name,
        country: weatherAPI.location.country,
        condition: weatherAPI.current.condition.text,
        tempInC: weatherAPI.current.temp_c,
        icon: weatherAPI.current.condition.icon,
        windKph: weatherAPI.current.wind_kph,
        humidity: weatherAPI.current.humidity,
        feelslikeInC: weatherAPI.current.feelslike_c
    }
}