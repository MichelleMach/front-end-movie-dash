import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/home"
import Movie from "../pages/movie"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="movie/:id" element={<Movie/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router 