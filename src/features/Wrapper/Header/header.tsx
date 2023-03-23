import React from 'react';
import './header.sass'
import ThemeButton from './ThemeButton/themeButton'
import Title from './Title/title'

export const Header: React.FC = () => {
    return (
        <div className="header">
            <Title/>
            <ThemeButton/>
        </div>
    );
};
