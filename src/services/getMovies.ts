import axios, {AxiosRequestConfig, AxiosResponse} from "axios"

const URL = process.env.REACT_APP_PUBLIC_API_URL

export const getAllMovies = ():Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: `${URL}search/shows?q=fantasy`,
    }
    return axios.request(options)
}

export const getCategories = (category: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: `${URL}shows?q=${category}`
    }
    return axios.request(options)
}

export const searchMovie = (category: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: "GET",
        url: `${URL}search/shows?q=${category}`
    }
    return axios.request(options)
}

export const getMovieDetail = (id: string | undefined): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: "GET",
        url: `${URL}shows/${id}`
    }

    return axios.request(options)
}


