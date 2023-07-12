
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DETAIL } from "constants/constants";
import { getMovieDetail } from "services/getMovies";
import { Detail } from "types/IDetail";

interface IStore {
    film: Detail
}

const initialState: IStore = {
    film: {
        name: undefined,
        id: undefined,
        image: undefined,
        language: undefined,
        rating: undefined,
        genres: [],
        premiered: undefined,
        network: undefined,
        summary: undefined
    }
}

export const showMovieDetail = createAsyncThunk<Detail, string | undefined, { rejectValue: string }>(
    DETAIL,
    async function (id, {rejectWithValue}) {        
            const response = await getMovieDetail(id)
        
            if (response.status !== 200) {
                return rejectWithValue('Server error')
            }
            
            const data = await response.data
            return data 
        }
)

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
       builder
            .addCase(showMovieDetail.fulfilled, (state, action) => {
                state.film = action.payload
            })
    }
})

export default detailSlice.reducer