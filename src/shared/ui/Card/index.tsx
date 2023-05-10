import React, {MouseEventHandler} from 'react';
import Image from "../Image";
import "./style.sass"
import {PaintingType} from "../../../entities/paintings/model/types";
import {AuthorType} from "../../../entities/authors/model/types";
import {LocationType} from "../../../entities/locations/model/types";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../app/hooks";


interface ICardProps {
    painting: PaintingType | undefined,
    author: AuthorType | undefined,
    location: LocationType | undefined
}

const Card: React.FC<ICardProps> = (props) => {
    const {
        painting,
        author,
        location
    } = props

    const isLoading = useAppSelector(state => state.paintings.isLoading);
    const darkMode = useAppSelector(state => state.settings.darkMode);

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
            <Link
                to={`/picture/${painting?.id}`}
                className="cardLink"
            >
                {
                    isLoading ? <div className={`card__loading ${darkMode}`}>
                            Loading...
                        </div>
                        : <div>
                            <Image
                                src={`${process.env.REACT_APP_FETCH_URL}${painting?.imageUrl}`}
                                alt={painting?.name}
                            />
                            <div
                                className="card__description-container"
                                ref={descriptionRef}
                            >
                                <div
                                    className="card__description-container_card-name"
                                    ref={nameDescriptionRef}
                                >
                                    {painting?.name}
                                </div>
                                <div
                                    className="card__description-container_card-creator"
                                >
                                    {`Автор: ${author?.name || "-"}`}<br/>
                                    {`Дата создания: ${painting?.created}`}<br/>
                                    {`Место: ${location?.location}`}<br/>
                                </div>
                            </div>
                        </div>
                }
            </Link>
        </div>
    );
};

export default Card;