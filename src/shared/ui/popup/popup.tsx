import React from 'react';
import "./popup.sass";

interface DropdownOptionsProps {
    onElementClick: (element: string) => void;

    options: Array<{
        text: string,
        id: number
    }>
}

const Popup: React.FC<DropdownOptionsProps> = (props) => {
    const {
        onElementClick,
        options,
    } = props

    return (
        <div className="popup">
            <hr/>
            {
                options.map(item => {
                    return <div
                        className="popup__option"
                        key={item.id}
                        onClick={() => {
                            onElementClick(item.text);
                        }}
                    >
                        {item.text}
                    </div>
                })
            }
        </div>
    );
};

export default Popup;