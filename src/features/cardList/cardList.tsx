import React from 'react';
import Card from "../../shared/ui/card/card";
import {useAppSelector} from "../../app/hooks";
import "./cardList.sass"

const CardList: React.FC = () => {
    const paintings = useAppSelector((state) => state.paintings.list)
    const authors = useAppSelector((state) => state.authors.list);

    const authorById = (id: number) => {
        return authors.filter(author => author.id === id)[0];
    }
    const locations = useAppSelector(state => state.locations.list);

    const locationById = (id: number) => {
        return locations.filter(location => location.id === id)[0];
    }

    return (
        <div className="cardList">
            {
                paintings.map(item => {
                    return <Card
                        key={item.id}
                        painting={item}
                        author={authorById(item.authorId)}
                        location={locationById(item.locationId)}
                    />
                })
            }
        </div>
    );
};

export default CardList;