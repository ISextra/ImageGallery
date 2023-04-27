import React, {useState} from 'react';
import './dropdown.sass'
import {useAppSelector} from "../../../app/hooks";
interface DropdownFilterProps {
    content: string | undefined;
    popupContent: React.ReactNode
}
const Dropdown: React.FC<DropdownFilterProps> = (props) => {
    const {
        content,
        popupContent
    } = props

    const [isShowPopupContent, setIsShowPopupContent] = useState(false);
    const dropdownButtonRef = React.useRef<HTMLButtonElement>(null);
    const darkMode = useAppSelector(state => state.settings.darkMode)

    function handleDropdownButtonClick() {
        setIsShowPopupContent(!isShowPopupContent);

        if (!isShowPopupContent && dropdownButtonRef.current) {
            dropdownButtonRef.current.style.borderBottom = "none";

            return
        }

        if (dropdownButtonRef.current) {
            dropdownButtonRef.current.style.borderBottom = "2px solid";
        }
    }

    return (
        <div className="dropdown">
            <button
                className="dropdown__button"
                ref={dropdownButtonRef}
                onClick={handleDropdownButtonClick}
                style={
                    darkMode === "light"
                        ? {
                            color: "black",
                            background: "white",
                            border: "2px solid black"
                        }
                        : {}
                }
            >
                {
                    content
                }
            </button>
            {
                isShowPopupContent && popupContent
            }
        </div>
    );
};

export default Dropdown;