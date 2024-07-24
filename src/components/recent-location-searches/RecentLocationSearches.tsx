import { Dispatch, SetStateAction } from "react"

import { LocationList } from "../location-list/LocationList"

import { Location, LocationOption } from "../../data/types"
import { StyledMainContainer, StyledSectionHeader } from "../../pages/homepage/styles"
import { StyledRecentLocations } from "./styles"

interface RecentLocationSearches {
    recentLocations: LocationOption[],
    setLocation: Dispatch<SetStateAction<Location>>
}

export function RecentLocationSearches({ recentLocations, setLocation }: RecentLocationSearches) {
    return <StyledMainContainer>
        <StyledRecentLocations>
            <StyledSectionHeader>Recent locations:</StyledSectionHeader>
            <LocationList
                locationOptions={recentLocations}
                setLocation={setLocation}
            ></LocationList>
        </StyledRecentLocations>
    </StyledMainContainer>
}