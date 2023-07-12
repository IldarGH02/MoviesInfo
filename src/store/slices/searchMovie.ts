import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERACH } from "constants/constants";
import { IShow } from "types/IShow";
import { ISerachMovie } from "./types";
import { searchMovie } from "services/getMovies";

const initialState: ISerachMovie = {
    movies: [],
}

export const fetchSearchMovies = createAsyncThunk<IShow[], string, { rejectValue: string }>(
    SERACH,
    async function (category, {rejectWithValue}) {        
            const response = await searchMovie(category)
        
            if (response.status !== 200) {
                return rejectWithValue('Server error')
            }
            
            const data = await response.data
            return data 
        }
)

const serachSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
       builder
            .addCase(fetchSearchMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
    }
})

export default serachSlice.reducer