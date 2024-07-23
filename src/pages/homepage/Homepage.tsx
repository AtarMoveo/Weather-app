import { useState } from "react";
import { Forecast } from "../../components/forecast/Forecast";
import { LocationSearch } from "../../components/location-search/LocationSearch";
import { UserForecast } from "../../components/user-forecast/UserForecast";
import { StyledHomepage, StyledMainContainer } from "./styles";

export function Homepage() {
    const [location, setLocation] = useState({ latitude: 51.52, longitude: -0.11 })

    return <StyledHomepage>
        <StyledMainContainer>
            <LocationSearch setLocation={setLocation}></LocationSearch>
            <Forecast location={location} queryKey="weather"></Forecast>
        </StyledMainContainer>
        <UserForecast></UserForecast>
    </StyledHomepage>
}