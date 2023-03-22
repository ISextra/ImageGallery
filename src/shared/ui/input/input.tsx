import React, {useState} from 'react';
import classes from "./input.module.sass";

interface IInputProps {
    content: string,
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        content
    } = props

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder={content}
                className={classes.input}
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
        </div>
    );
};

export default Input;
