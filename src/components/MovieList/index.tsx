import React from "react";
import { IShow } from "types/IShow";
import MovieItem from "./components/MovieItem";

interface IMovieListParams {
    list: IShow[]
}

const MovieList: React.FC<IMovieListParams> = ({list}) => {
    return (
       <ul className="movies__items">
            {list.length > 0 ? list.map((movie: IShow) => {
                return <MovieItem
                    key={movie.show.id}
                    item={movie}
                />
            }) : <></>}
       </ul> 
    )
}

export default MovieList