import React from 'react';
import './index.sass';
import { withProviders} from "./providers";
import { Header } from '../entities/Header/Header';
import { Filters } from "../entities/Filters/Filters";
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Filters/>
            </div>
            <Routes>
                <Route path="/" element={<div>123</div>}>
                </Route>
                <Route index element={<div>123</div>} />
                <Route path="/about" element={<div>1234</div>} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;