import React from 'react';
import './index.sass';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import links from "../shared/ui/constants/links";
import Wrapper from "../features/Wrapper/wrapper";
import HomePage from "../pages/Home/homePage";
import CardPage from "../pages/Card/cardPage";
import PageNotFound from "../pages/NotFound/pageNotFound";
import { Provider } from 'react-redux'
import store from "./store"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={links.homePage} element={<Wrapper/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={links.cardPage} element={<CardPage/>} />
                        <Route path={links.padeNotFound} element={<PageNotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;