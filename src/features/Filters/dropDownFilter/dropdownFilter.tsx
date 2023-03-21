import React, {useState} from 'react';
import classes from "./dropdownFilter.module.sass";
import store from "../../../app/store";

interface DropdownFilterProps {
    content: string;
    show: (flag:boolean)=>void;
    options: React.ReactNode
}
const DropdownFilter: React.FC<DropdownFilterProps> = ({content, show, options}) => {
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
            {options}
        </div>
    );
};

export default DropdownFilter;