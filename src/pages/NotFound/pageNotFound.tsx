import React from 'react';
import classes from "./pageNotFound.module.sass";

const PageNotFound: React.FC = () => {
    return (
        <div className={classes.notFound}>
            Page Not Found
        </div>
    );
};

export default PageNotFound;