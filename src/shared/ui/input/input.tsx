import React, {useState} from 'react';
import "./input.sass";
import {useAppSelector} from "../../../app/hooks";

interface IInputProps {
    content: string,
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        content
    } = props

    const [inputValue, setInputValue] = useState("");
    const darkMode = useAppSelector(state => state.settings.darkMode)

    return (
        <input
            type="text"
            placeholder={content}
            className="input"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            style={
                darkMode === "light"
                    ? {
                        color: "black",
                        background: "white",
                        border: "2px solid black"
                      }
                    : {}
            }
        />
    );
};

export default Input;
