import React, {useMemo} from 'react';
import "./popup.sass";
import {useAppSelector} from "../../../app/hooks";

interface DropdownOptionsProps {
    onElementClick: (element: string | undefined) => void;

    options: Array<{
        text: string | undefined,
        id: number | undefined
    }>
}

const Popup: React.FC<DropdownOptionsProps> = (props) => {
    const {
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
            {
                options.map(item => {
                    return <div
                        className="popup__option"
                        key={item.id}
                        onClick={() => {
                            onElementClick(item.text);
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