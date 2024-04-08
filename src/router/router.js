import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/home"
import MoviePage from "../pages/moviePage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="filme/:id" element={<MoviePage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router 