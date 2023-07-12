import { IGenres } from "types/IGenres"
import { IShow } from "types/IShow"

export type InitialState = {
    movies: IShow[]
    isLoading: boolean
    error: string | null
}

export type CategorySlice = {
    movies: IGenres[]
    category: string
    genresList: string []
    movieList: IShow[]
}

export type ISerachMovie = {
    movies: IShow[]
}