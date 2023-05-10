import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../app/hooks";
import "./style.sass";

interface IInputProps {
    defaultValue: string,
    content: string,
    dataOnChange: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        defaultValue,
        content,
        dataOnChange,
    } = props

    const [inputValue, setInputValue] = useState(content);
    const darkMode = useAppSelector(state => state.settings.darkMode);

    useEffect(() => {
        dataOnChange(inputValue);
    }, [inputValue])

    return (
        <input
            type="text"
            placeholder={defaultValue}
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
