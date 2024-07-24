import { useEffect, useState } from "react";

import { Forecast } from "../forecast/Forecast";

import { Location } from "../../data/types";

import { StyledMainContainer, StyledSectionHeader } from "../../pages/homepage/styles";

export function UserForecast() {
    const [userLocation, setUserLocation] = useState<Location>()

    useEffect(() => {
        getUserLocation()
    }, [])

    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                // Success callback
                function (position) {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                // Error callback
                function (error) {
                    console.error("Error getting user location:", error)
                }
            )
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    return <StyledMainContainer>
    <StyledSectionHeader>Your current location:</StyledSectionHeader>
    {!userLocation && <div>Loading...</div>}
    {userLocation && <Forecast location={userLocation} queryKey="userWeather"></Forecast>}
    </StyledMainContainer>
}