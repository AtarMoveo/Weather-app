import { useState } from "react";
import { Forecast } from "../../components/forecast/Forecast";
import { LocationSearch } from "../../components/location-search/LocationSearch";

export function Homepage() {
    const [location, setLocation] = useState('Tel Aviv')

    return <>
        <LocationSearch setLocation={setLocation}></LocationSearch>
        <Forecast location={location}></Forecast>
    </>
}