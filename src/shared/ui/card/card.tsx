import React, { MouseEventHandler } from 'react';
import {useAppSelector} from "../../../app/hooks";
import Image from "../../image/image";
import "./card.sass"


interface ICardProps {
    painting:{
        id: number,
        name: string
        authorId: number,
        locationId: number,
        created: string,
        imgUrl: string,
    }
}

const Card: React.FC<ICardProps> = (props) => {
    const {
        painting
    } = props

    const descriptionRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
        if (descriptionRef.current) {
            descriptionRef.current.style.top = "142px";
        }
    }

    const handleMouseLeave: MouseEventHandler<HTMLDivElement>= (event) => {
        if (descriptionRef.current) {
            descriptionRef.current.style.top = "176px";
        }
    }

    // const authors = useAppSelector(state => state.authors.list.map(item => {
    //     return {
    //         text: item.name,
    //         id: item.id,
    //     };
    // }))

    return (
        <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                //src={`${process.env.REACT_APP_FETCH_URL}${painting.imgUrl}`}
                //src={`${process.env.REACT_APP_FETCH_URL}/images/The_ninth_wave.jpeg`}
                src={`${process.env.REACT_APP_FETCH_URL}${painting.imgUrl}`}
                alt={painting.name}
            />
            <div
                className="card__description-container"
                ref={descriptionRef}
            >
                <div className="card__description-container_card-name">
                    {painting.name}
                </div>
                <div className="card__description-container_card-creator">
                    {`Дата создания: ${painting.created}`}
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