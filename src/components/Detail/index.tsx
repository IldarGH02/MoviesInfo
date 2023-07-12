import { Detail, IImage } from "types/IDetail"
import prepareText from "utils/prepareText"

interface IMovie {
    movie: Detail
    src?: IImage
}

const MovieDetail: React.FC<IMovie> = ({movie}) => {
    const image = movie?.image?.original

    return (
        <div className="movie__detail-content">
            <div className="movie__detail-card">
                <picture className="movie__detail-image">
                    <img src={image} alt="title" />
                </picture>
                <div className="movie__detail-description">
                    <h4 className="movie__detail-name">
                        {movie.name}
                    </h4>
                    <p className="movie__detail-country movie-info">
                        Страна: {movie.network?.country.name}
                    </p>
                    <p className="movie__detail-language movie-info">
                        Язык: {movie.language}
                    </p>
                    <p className="movie__detail-premiered movie-info">
                        Дата премьеры: {movie.premiered}
                    </p>
                    <p className="movie__detail-genres movie-info">
                        Жанры: {prepareText(movie.genres)}
                    </p>
                </div>
                <div className="movie__detail-rating">
                    {movie.rating?.average}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail