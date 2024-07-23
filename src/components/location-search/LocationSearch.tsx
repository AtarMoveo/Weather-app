import { Dispatch, SetStateAction, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { LocationList } from "../location-list/LocationList"

import { weatherService } from "../../services/weather.service"

import { Location } from "../../data/types"

import { StyledLocationSearch } from "./styles"

interface LocationSearchProps {
    setLocation: Dispatch<SetStateAction<Location>>
}

export function LocationSearch({ setLocation }: LocationSearchProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [isListOpen, setIsListOpen] = useState(false)

    const { data: locationOptions, isLoading, refetch } = useQuery({
        queryKey: ['locations'],
        queryFn: () => weatherService.fetchLocationOptions(searchTerm),
        enabled: false
    })

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
        setIsListOpen(true)
        refetch()
    }

    return <StyledLocationSearch>
        <h3>Select location:</h3>
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Enter city name"
            onBlur={() => setIsListOpen(false)}
        />
        {isListOpen && <div className="location-options-container">
            {(!locationOptions || isLoading) && <div>Loading optional locations</div>}
            {locationOptions && !locationOptions.length && <div>No matching locations were found...</div>}
            {locationOptions && !!locationOptions.length &&
                <LocationList
                    locationOptions={locationOptions}
                    setLocation={setLocation}
                    setIsListOpen={setIsListOpen}>
                </LocationList>}
        </div>}
    </StyledLocationSearch>
}