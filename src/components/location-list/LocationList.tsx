import { Dispatch, SetStateAction } from "react"
import { LocationOption } from "../../data/types"
import { StyledLocationList } from "./styles"

interface LocationListProps {
    locationOptions: LocationOption[],
    setLocation: Dispatch<SetStateAction<string>>
    setIsListOpen: Dispatch<SetStateAction<boolean>>
}

export function LocationList({ locationOptions, setLocation, setIsListOpen }: LocationListProps) {
    function handleLocationSelect(location: string) {
        setLocation(location)
        setIsListOpen(false)
    }

    return <StyledLocationList className="clean-list">
        {locationOptions?.map((location) => {
            return <li className="location-item" key={location._id} onClick={() => handleLocationSelect(location.url)}>
                {location.name}, {location.country}</li>
        })}
    </StyledLocationList>
}