import React from 'react';
import './style.sass'
import ThemeButton from './ThemeButton'
import Title from './Title'

export const Header: React.FC = () => {
    return (
        <div
            className="header"
        >
            <Title/>
            <ThemeButton/>
        </div>
    );
};
