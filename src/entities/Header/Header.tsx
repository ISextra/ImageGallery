import React from 'react';
import classes from './Header.module.sass'
import ThemeButton from './ThemeButton/ThemeButton'
import Title from './Title/Title'

export const Header: React.FC = () => {
    return (
        <div className={classes.Header}>
            <Title/>
            <ThemeButton/>
        </div>
    );
};
