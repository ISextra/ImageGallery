import React from 'react';
import "./image.sass"

interface IImageProps {
    src: string,
    alt: string,
}

const Image: React.FC<IImageProps> = (props) => {
    const {
        src,
        alt,
    } = props
    return (
        <img
            src={src}
            alt={alt}
            className="image"
        />
    );
};

export default Image;