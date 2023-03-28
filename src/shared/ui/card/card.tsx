import React, {MouseEventHandler, useEffect} from 'react';
import {useAppSelector} from "../../../app/hooks";
import Image from "../../image/image";
import "./card.sass"
import {getPaintings} from "../../../entities/paintings/api/getPaintings";
import {getLocations} from "../../../entities/locations/api/getLocations";
import {getAuthors} from "../../../entities/authors/api/getAuthors";


interface ICardProps {
    painting:{
        id: number,
        name: string
        authorId: number,
        locationId: number,
        created: string,
        imageUrl: string,
    }
}

const Card: React.FC<ICardProps> = (props) => {
    const {
        painting
    } = props

    const cardRef = React.useRef<HTMLDivElement>(null);
    const descriptionRef = React.useRef<HTMLDivElement>(null);
    const nameDescriptionRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
        if (descriptionRef.current && cardRef.current && nameDescriptionRef.current) {
            nameDescriptionRef.current.style.whiteSpace = "normal";
            nameDescriptionRef.current.style.overflow = "visible";

            descriptionRef.current.style.top = cardRef.current.offsetHeight - descriptionRef.current.offsetHeight + "px";
        }

    }

    const handleMouseLeave: MouseEventHandler<HTMLDivElement>= () => {
        if (descriptionRef.current && cardRef.current && nameDescriptionRef.current) {
            nameDescriptionRef.current.style.whiteSpace = "nowrap";
            nameDescriptionRef.current.style.overflow = "hidden";

            descriptionRef.current.style.top = cardRef.current.offsetHeight - nameDescriptionRef.current.offsetHeight + "px";
        }
    }

    return (
        <div
            className="card"
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

        >
            <Image
                src={`${process.env.REACT_APP_FETCH_URL}${painting.imageUrl}`}
                alt={painting.name}
            />
            <div
                className="card__description-container"
                ref={descriptionRef}
            >
                <div
                    className="card__description-container_card-name"
                    ref={nameDescriptionRef}
                >
                    {painting.name}
                </div>
                <div
                    className="card__description-container_card-creator"
                >
                    {`Автор: ${painting.created}`}<br/>
                    {`Дата создания: ${painting.created}`}<br/>
                    {`Место: ${painting.created}`}<br/>
                </div>
            </div>
        </div>
    );
};

export default Card;

// <div> //обертка для перехода по клику; position: relative
//     <div/> //картинка
//     <div> //блок информацции; position: absolute; align-items: end
//         <div/> //название, стоящие внизу
//         <div/> //появляющийся при наведении блок с информацией
//     </div>
// </div>