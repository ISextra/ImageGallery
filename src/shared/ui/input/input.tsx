import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../app/hooks";
import "./input.sass";

interface IInputProps {
    content: string,
    dataOnChange: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        content,
        dataOnChange,
    } = props

    const [inputValue, setInputValue] = useState("");
    const darkMode = useAppSelector(state => state.settings.darkMode);

    useEffect(() => {
        dataOnChange(inputValue);
    }, [inputValue])

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
