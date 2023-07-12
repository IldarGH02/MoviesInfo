import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CategorySlice } from "./types";
import { IGenres } from "types/IGenres";
import { CATEGORY, CATEGORY_MOVIE } from "constants/constants";
import { getCategories, searchMovie } from "services/getMovies";
import { IShow } from "types/IShow";

const initialState: CategorySlice = {
    movies: [],
    category: '',
    genresList: [],
    movieList: []
}

export const fetchCategory = createAsyncThunk<IGenres[], string, { rejectValue: string }>(
    CATEGORY,
    async function (category:string, {rejectWithValue}) {        
            const response = await getCategories(category)
        
            if (response.status !== 200) {
                return rejectWithValue('Server error')
            }
            
            const data = await response.data
            return data 
        }
)

export const fetchMovieOfCategory = createAsyncThunk<IShow[], string, {rejectValue: string}>(
    CATEGORY_MOVIE,
    async function (category, {rejectWithValue}) {
        const response = await searchMovie(category)

        if(response.status !== 200) {
            return rejectWithValue('Server error')
        }

        const data = await response.data
        return data
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
       builder
            .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<IGenres[], string>) => {
                state.movies = action.payload
            })
            .addCase(fetchMovieOfCategory.fulfilled, (state, action: PayloadAction<IShow[], string>) => {
                state.movieList = action.payload
            })
    }
})

export default categorySlice.reducer