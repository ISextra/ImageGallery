import React, {useState} from 'react';
import "./input.sass";

interface IInputProps {
    content: string,
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        content
    } = props

    const [inputValue, setInputValue] = useState("");

    return (
        <input
            type="text"
            placeholder={content}
            className="input"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
        />
    );
};

export default Input;
