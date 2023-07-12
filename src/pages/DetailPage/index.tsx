import { useParams } from "react-router-dom"
import { routeMain } from "./routes"
import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { useEffect, useState } from "react"
import { showMovieDetail } from "store/slices/detailSlice"
import MovieDetail from "components/Detail"
import Loader from "ui/Loader/Loader"

const DetailPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams()

    const dispatch = useAppDispatch()
    const showDetail = useAppSelector(state => state.detail.film)

    useEffect(() => {
        setTimeout(() => {
            dispatch<any>(showMovieDetail(id))
            setIsLoading(true)
        }, 1000)
    }, [id, dispatch])

    return (
        <section className="movie">
            <div className="container">
                {isLoading ? <MovieDetail movie={showDetail}/> : <Loader/>}
            </div>
        </section>
    )
}

export { routeMain }

export default DetailPage