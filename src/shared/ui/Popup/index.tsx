import React from 'react';
import "./style.sass";
import {useAppSelector} from "../../../app/hooks";

interface DropdownOptionsProps {
    firstElement: string,
    onElementClick: (element: string | undefined, elementId: string | undefined) => void,
    options: Array<{
        text: string | undefined,
        id: number | undefined
    }>
}

const Popup: React.FC<DropdownOptionsProps> = (props) => {
    const {
        firstElement,
        onElementClick,
        options,
    } = props

    const darkMode = useAppSelector(state => state.settings.darkMode)

    return (
        <div
            className="popup"
            style={
                darkMode === "light" ? {
                    background: "white",
                    border: "2px solid black",
                } : {}
            }
        >
            <hr/>
            <div
                className="popup__option"
                onClick={() => {
                    onElementClick(firstElement, `-1`);
                }}
                style={
                    darkMode === "light"
                        ? {
                            color: "black",
                            background: "white",
                            border: "1px black",
                        }
                        : {}
                }
            >
                {firstElement}
            </div>
            {

                options.map(item => {
                    return <div
                        className="popup__option"
                        key={item.id}
                        onClick={() => {
                            onElementClick(item.text, `${item.id}`);
                        }}
                        style={
                            darkMode === "light"
                                ? {
                                    color: "black",
                                    background: "white",
                                    border: "1px black",
                                }
                                : {}
                        }
                    >
                        {item.text}
                    </div>
                })
            }
        </div>
    );
};

export default Popup;