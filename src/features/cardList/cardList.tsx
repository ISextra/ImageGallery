import React from 'react';
import Card from "../../shared/ui/card/card";
import {useAppSelector} from "../../app/hooks";
import "./cardList.sass"

const CardList: React.FC = () => {
    const paintings = useAppSelector(state => state.paintings.list)

    return (
        <div className="cardList">
            {
                paintings.map(item => {
                    return <Card
                        key={item.id}
                        painting={item}
                    />
                })
            }
        </div>
    );
};

export default CardList;