import React from 'react';
import './index.sass';
import { withProviders } from "./providers";
import { Header } from '../entities/Header/Header';
import { Filters } from "../entities/Filters/Filters";

function App() {
    return (
        <div className="App">
            <Header/>
            <Filters/>
        </div>
    );
}

export default withProviders(App);