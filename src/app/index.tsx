import React, {createContext} from 'react';
import './index.sass';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import links from "../shared/constants/links";
import Wrapper from "../features/Wrapper/wrapper";
import HomePage from "../pages/Home/homePage";
import CardPage from "../pages/Card/cardPage";
import PageNotFound from "../pages/NotFound/pageNotFound";
import { Provider } from 'react-redux'
import store from "./store"
import {useAppSelector} from "./hooks";
import {toggleDarkMode} from "../shared/model/darkModeSlice";

function App() {
    const ThemeContext = createContext({})
    const mode = useAppSelector(state => state.darkMode.mode)

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{mode, toggleDarkMode}}>
                <div id={mode}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={links.homePage} element={<Wrapper/>}>
                                <Route index element={<HomePage/>}/>
                                <Route path={links.cardPage} element={<CardPage/>} />
                                <Route path={links.padeNotFound} element={<PageNotFound/>} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeContext.Provider>
        </Provider>
    );
}

export default App;