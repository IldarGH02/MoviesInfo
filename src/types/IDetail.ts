export interface IImage {
    medium: string | undefined
    original: string | undefined
}

interface IAverage {
    average: number | undefined
}

interface ICountryName {
    name: string
}

interface ICountryInfo {
    country: ICountryName
}

export type Detail = {  
    name: string | undefined
    id: string | undefined
    image: IImage | undefined
    language: string | undefined
    rating: IAverage | undefined
    genres: string[]
    premiered: string | undefined
    network?: ICountryInfo | undefined
    summary: string | undefined
}