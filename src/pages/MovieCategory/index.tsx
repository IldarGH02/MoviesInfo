import { useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import { fetchCategory, fetchMovieOfCategory } from "store/slices/categorySlice";

import { routeMain } from "./routes";
import Selects from "ui/Selects";
import MovieList from "components/MovieList";
import Loader from "ui/Loader/Loader";


const MovieCategory = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState('drama')
    const movies = useAppSelector(state => state.category.movies)
    const movieList = useAppSelector(state => state.category.movieList)
    const dispatch = useAppDispatch()

    const genresList = movies.map(movie => movie.genres)
    const categories = genresList.flat().filter((item, index) => {
        return genresList.flat().indexOf(item) === index
    })

    useEffect(() => {
        dispatch<any>(fetchCategory(category))
    },[category, dispatch])

    useEffect(() => {
        dispatch<any>(fetchMovieOfCategory(category))
        setIsLoading(true)
    }, [category, dispatch])

    const getValueOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget.value
        setCategory(target)
    }

    if(!isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <section className="categories">
            <div className="container">
                <div className="categories__content">
                    <div className="categories__options">
                        <Selects
                            categories={categories}
                            options={getValueOption}
                            value={category}
                        />
                    </div>
                    <div className="categories__movies">
                        {isLoading ? <MovieList list={movieList}/> : <Loader/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default MovieCategory