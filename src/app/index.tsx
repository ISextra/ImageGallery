import React from 'react';
import './index.sass';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import links from "../shared/constants/links";
import Wrapper from "../features/Wrapper/wrapper";
import HomePage from "../pages/Home/homePage";
import CardPage from "../pages/Card/cardPage";
import PageNotFound from "../pages/NotFound/pageNotFound";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={links.homePage} element={<Wrapper/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={links.cardPage} element={<CardPage/>} />
                    <Route path={links.padeNotFound} element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;