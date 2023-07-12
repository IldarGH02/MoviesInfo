import {useState} from "react";
import { routeMain } from "./routes";
import Input from "ui/Input";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { fetchSearchMovies } from "store/slices/searchMovie";
import MovieList from "components/MovieList";

const Search = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const movies = useAppSelector(state => state.search.movies)
    console.log(movies)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget.value
        setValue(target)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            dispatch<any>(fetchSearchMovies(value))
        }
    }

    return (
        <section className="search">
            <div className="container">
                <div className="search__content">
                    <div className="search__handler">
                        <Input 
                            value={value}
                            placeholder="example: animals"
                            className="search__input"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="search__result">
                        {movies && <MovieList list={movies}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export {routeMain}
export default Search