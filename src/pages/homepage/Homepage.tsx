import { useState } from "react";
import { Forecast } from "../../components/forecast/Forecast";
import { LocationSearch } from "../../components/location-search/LocationSearch";
import { UserForecast } from "../../components/user-forecast/UserForecast";
import { StyledHomepage, StyledMainContainer } from "./styles";
import { RecentLocationSearches } from "../../components/recent-location-searches/RecentLocationSearches";
import { LocationOption } from "../../data/types";

export function Homepage() {
    const [location, setLocation] = useState({ latitude: 51.52, longitude: -0.11 })
    const [recentLocationSearch, setRecentLocationSearch] = useState<LocationOption[]>([])

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