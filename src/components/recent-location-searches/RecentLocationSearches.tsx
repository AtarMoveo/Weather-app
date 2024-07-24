import { Dispatch, SetStateAction } from "react"
import { Location, LocationOption } from "../../data/types"
import { StyledMainContainer } from "../../pages/homepage/styles"
import { LocationList } from "../location-list/LocationList"

interface RecentLocationSearches {
    recentLocations: LocationOption[],
    setLocation: Dispatch<SetStateAction<Location>>
}

export function RecentLocationSearches({ recentLocations, setLocation }: RecentLocationSearches) {
    return <StyledMainContainer>
        <h2>Recent locations:</h2>
        <LocationList
            locationOptions={recentLocations}
            setLocation={setLocation}
        ></LocationList>
    </StyledMainContainer>
}