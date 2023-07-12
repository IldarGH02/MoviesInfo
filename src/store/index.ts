import { configureStore, combineReducers} from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice'
import categoryReducer from './slices/categorySlice'
import searchReducer from './slices/searchMovie'
import detailReducer from './slices/detailSlice'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    list: moviesReducer,
    category: categoryReducer,
    search: searchReducer,
    detail: detailReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store