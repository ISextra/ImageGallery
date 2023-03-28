import React, {MouseEventHandler, useEffect} from 'react';
import Image from "../image/image";
import "./card.sass"


interface ICardProps {
    painting: {
        id: number,
        name: string
        authorId: number,
        locationId: number,
        created: string,
        imageUrl: string,
    },
    author: {
        id?: number,
        name?: string
    },
    location: {
        id?: number,
        location?: string,
    }
}

const Card: React.FC<ICardProps> = (props) => {
    const {
        painting,
        author,
        location
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
                    {`Автор: ${author.name || "-"}`}<br/>
                    {`Дата создания: ${painting.created}`}<br/>
                    {`Место: ${location.location}`}<br/>
                </div>
            </div>
        </div>
    );
};

export default Card;