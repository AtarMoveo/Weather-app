export interface Weather {
    name: string,
    country: string,
    condition: string,
    tempInC: number,
    icon: string
    windKph: number,
    humidity: number,
    feelsLikeInC: number
}

export interface Location {
    latitude: number,
    longitude: number
}

export interface LocationOption extends Location {
    _id: number
    name: string,
    country: string,
    url: string
}