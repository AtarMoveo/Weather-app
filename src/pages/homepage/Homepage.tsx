import { useLayoutEffect, useState } from "react";

import { Forecast } from "../../components/forecast/Forecast";
import { LocationSearch } from "../../components/location-search/LocationSearch";
import { UserForecast } from "../../components/user-forecast/UserForecast";
import { RecentLocationSearches } from "../../components/recent-location-searches/RecentLocationSearches";

import { weatherService } from "../../services/weather.service";
import { LocationOption } from "../../data/types";

import { StyledHomepage, StyledMainContainer } from "./styles";

export function Homepage() {
    const [location, setLocation] = useState({ latitude: 51.52, longitude: -0.11 })
    const [recentLocationSearch, setRecentLocationSearch] = useState<LocationOption[]>([])

    useLayoutEffect(() => {
        const storedLocations = localStorage.getItem(weatherService.recentLocationsKey)
        if (storedLocations) {
            setRecentLocationSearch(JSON.parse(storedLocations))
        }
    }, [])

    return <StyledHomepage>
        <StyledMainContainer>
            <LocationSearch setLocation={setLocation}></LocationSearch>
            <Forecast
                location={location}
                queryKey="weather"
                setRecentLocationSearch={setRecentLocationSearch}
            ></Forecast>
        </StyledMainContainer>
        <UserForecast></UserForecast>
        <RecentLocationSearches
            recentLocations={recentLocationSearch}
            setLocation={setLocation}
        >
        </RecentLocationSearches>
    </StyledHomepage>
}