import React, {useState} from 'react';
import classes from "./dropdown.module.sass";

interface DropdownFilterProps {
    content: string;
    show: (flag:boolean)=>void;
    popupContent: React.ReactNode
}
const Dropdown: React.FC<DropdownFilterProps> = ({content, show, popupContent}) => {

    const [isNeedShowOptions, setIsNeedShowOptions] = useState(false);
    const inputDateButtonRef = React.useRef<HTMLButtonElement>(null);

    function handleDropdownButtonClick() {
        setIsNeedShowOptions(!isNeedShowOptions);
        show(isNeedShowOptions);

        if (isNeedShowOptions && inputDateButtonRef.current) {
            inputDateButtonRef.current.style.borderBottom = "none";

            return
        }

        if (inputDateButtonRef.current) {
            inputDateButtonRef.current.style.borderBottom = "2px solid white";
        }
    }

    return (
        <div className={classes.dropdownFilter}>
            <button
                className={classes.dropdownFilterButton}
                ref={inputDateButtonRef}
                onClick={handleDropdownButtonClick}
            >
                {
                    content
                }
            </button>
            {isShowPopupContent && popupContent} //toDo переделать флаги показа таким образом
        </div>
    );
};

export default Dropdown;