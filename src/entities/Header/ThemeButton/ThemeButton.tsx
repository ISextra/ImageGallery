import React from 'react';
import classes from './ThemeButton.module.sass'

const ThemeButton: React.FC = () => {
    return (
        <button className={classes.LightModeBtn}>
            -(x)-
        </button>
    );
};

export default ThemeButton;