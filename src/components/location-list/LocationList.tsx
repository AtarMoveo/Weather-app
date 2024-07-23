import { Dispatch, SetStateAction } from "react"
import { Location, LocationOption } from "../../data/types"
import { StyledLocationList } from "./styles"

interface LocationListProps {
    locationOptions: LocationOption[],
    setLocation: Dispatch<SetStateAction<Location>>
    setIsListOpen: Dispatch<SetStateAction<boolean>>
}

export function LocationList({ locationOptions, setLocation, setIsListOpen }: LocationListProps) {
    
    function handleLocationSelect(location: Location) {
        setLocation(location)
        setIsListOpen(false)
    }

    return <StyledLocationList className="clean-list">
        {locationOptions?.map((location) => {
            return <li className="location-item" key={location._id}
                onClick={() => handleLocationSelect({ latitude: location.latitude, longitude: location.longitude })}>
                {location.name}, {location.country}
            </li>
        })}
    </StyledLocationList>
}