import React from 'react';
import './index.sass';
import { withProviders } from "./providers";
import { Header } from '../entities/Header/Header';

function App() {
    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default withProviders(App);