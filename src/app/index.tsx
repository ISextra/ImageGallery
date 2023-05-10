import React from 'react';
import './index.sass';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import links from "../shared/constants/links";
import Wrapper from "../features/Wrapper";
import HomePage from "../pages/Home";
import CardPage from "../pages/Card";
import PageNotFound from "../pages/NotFound";
import { Provider } from 'react-redux'
import store from "./store"
import axios from "axios";

const postman = axios.create({
    baseURL: `${process.env.REACT_APP_FETCH_URL}/paintings`,
})
const AxiosContext = React.createContext(postman);

function App() {
    return (
        <Provider store={store}>
            <AxiosContext.Provider value={postman}>
                <BrowserRouter>
                    <Routes>
                        <Route path={links.homePage} element={<Wrapper/>}>
                            <Route index element={<HomePage/>}/>
                            <Route path={links.cardPage} element={<CardPage/>} />
                            <Route path={links.padeNotFound} element={<PageNotFound/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AxiosContext.Provider>
        </Provider>
    );
}

export { postman }
export default App;