import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMovies } from "services/getMovies";
import { InitialState } from "./types";
import { IShow } from "types/IShow";
import { MOVIES } from "constants/constants";


const initialState: InitialState = {
    movies: [],
    isLoading: false,
    error: null,
}

export const fetchMovies = createAsyncThunk<IShow[]>(
    MOVIES,
    async function () {
            const response = await getAllMovies()

            if(response.status !== 200) {
                console.log('Error: ')
            }
            
            const data = await response.data
            return data 
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        
    },
    extraReducers:(builder) => {
       builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.isLoading = false;
            })
    }
})

export default moviesSlice.reducer