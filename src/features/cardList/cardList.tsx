import React from 'react';
import Card from "../../shared/ui/card/card";
import store from "../../app/store";
import {useAppSelector} from "../../app/hooks";

const CardList: React.FC = () => {
    const paintings = useAppSelector(state => state.paintings.list)
    console.log(paintings)

    return (
        <div>
            {/*<Card painting={painting1}/>*/}
        </div>
    );
};

export default CardList;