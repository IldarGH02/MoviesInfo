import React, {Suspense} from 'react'
import { Route, Routes} from "react-router-dom";

import Home, {routeMain as routeHomePage} from "pages/Home";
import MovieCategory, {routeMain as routeMovieCategory} from 'pages/MovieCategory';
import About, {routeMain as routeAbout} from 'pages/About';
import Search, {routeMain as routeSearch} from 'pages/Search';
import DetailPage, {routeMain as routeDetailPage} from 'pages/DetailPage';
import Layout from 'pages/Layout';
import Spiner from 'ui/Loader/Loader';

const AppContent = () => {
    return (
        <div className="mainWrapper">
                <Suspense fallback={<Spiner/>}>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route
                                path={routeHomePage()}
                                element={<Home/>}
                            />
                            <Route
                                path={routeMovieCategory()}
                                element={<MovieCategory/>}
                            />
                            <Route
                                path={routeAbout()}
                                element={<About/>}
                            />
                            <Route
                                path={routeSearch()}
                                element={<Search/>}
                            />
                            <Route
                                path={routeDetailPage()}
                                element={<DetailPage/>}
                            />
                        </Route>
                    </Routes>
                </Suspense>
        </div>
    )
}

export default AppContent