export interface Weather {
    name: string,
    country: string,
    condition: string,
    tempInC: number,
    icon: string
    windKph: number,
    humidity: number,
    feelslikeInC: number
}

export interface LocationOption {
    _id: number
    name: string,
    country: string,
    url: string
}