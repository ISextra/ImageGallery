import React, {useState} from 'react';
import classes from "./select.module.sass";

interface DropdownOptionsProps {
    isNeedShowOptions: boolean;
    onElementClick:(element: string) => void;

    options: Array<{
        text: string,
        id: number
    }>
}
//toDo overflow auto + аграничить высоту
const Select: React.FC<DropdownOptionsProps> = (props) => {
    const {
        isNeedShowOptions,
        onElementClick,
        options,
    } = props

    return (
        <div>
            <div className={classes.dropdownSelect}>
                <hr/>
                {
                    options.map(item => {
                        return <div
                            className={classes.dropdownSelectOption}
                            key={item.id}
                            onClick={(event) => {
                                onElementClick(item.text);
                            }}
                        >
                            {item.text}
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Select;