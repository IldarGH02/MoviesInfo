import { NavLink } from "react-router-dom";

import { routeMain as routeMovieDetail } from "pages/DetailPage";

import { IShow } from "types/IShow";
import Plug from "ui/Plug";
import prepareText from "utils/prepareText";

interface IMovieDatailParams {
    item: IShow
}

const MovieItem: React.FC<IMovieDatailParams> = ({item}) => {

    const image = item.show?.image?.medium

    return (
        <li className="movie__item">
            <NavLink to={routeMovieDetail(item.show.id?.toString())} className="movie__article">
                <div className="movie__card">
                    <div className="movie__content">
                        {image ? <picture className='movie__image'>
                            <img src={image} alt='Обложка'/>
                        </picture> : <Plug/>}                      
                        <div className="movie__description">
                            <h3 className="movie__name">{item.show?.name}</h3>
                            <p className="movie__genres">{prepareText(item.show.genres)}</p>
                            <p className="movie__premiered">{item.show?.premiered}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default MovieItem