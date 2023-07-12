// import MovieList from 'components/MovieList'
import React, {useEffect} from 'react'
import { routeMain } from './routes'

import { useAppSelector, useAppDispatch } from 'hooks/hooks'

import MovieList from 'components/MovieList'

import Spiner from 'ui/Loader/Loader'
import { fetchMovies } from 'store/slices/moviesSlice'

const Home = () => {
    const {movies, isLoading} = useAppSelector(state => state.list)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch<any>(fetchMovies())
    }, [dispatch])   
    
    console.log(movies)

    return (
        <section className='home'>
            <div className='container'>
                <div className='home__content'>
                    {!isLoading ? <MovieList list={movies.slice(0, 8)}/> : <Spiner/>}                    
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default Home