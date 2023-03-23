import React, {useState} from 'react';
import './dropdown.sass'
interface DropdownFilterProps {
    content: string;
    popupContent: React.ReactNode
}
const Dropdown: React.FC<DropdownFilterProps> = (props) => {
    const {
        content,
        popupContent
    } = props

    const [isShowPopupContent, setIsShowPopupContent] = useState(false);
    const dropdownButtonRef = React.useRef<HTMLButtonElement>(null);

    function handleDropdownButtonClick() {
        setIsShowPopupContent(!isShowPopupContent);

        if (!isShowPopupContent && dropdownButtonRef.current) {
            dropdownButtonRef.current.style.borderBottom = "none";

            return
        }

        if (dropdownButtonRef.current) {
            dropdownButtonRef.current.style.borderBottom = "2px solid white";
        }
    }

    return (
        <div className="dropdown">
            <button
                className="dropdown__button"
                ref={dropdownButtonRef}
                onClick={handleDropdownButtonClick}
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