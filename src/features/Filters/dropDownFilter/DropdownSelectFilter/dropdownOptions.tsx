import React, {useState} from 'react';
import classes from "./select.module.sass";
import store from "../../../../app/store";
import {useSelector} from "react-redux";

interface DropdownOptionsProps {
    isNeedShowOptions: boolean;
    options: Array<{
        text: string,
        id: number
    }>
}

const DropdownOptions: React.FC<DropdownOptionsProps> = (props) => {
    const {
        isNeedShowOptions,
        options,
    } = props
    const [DropdownFilterValue, setDropdownFilterValue] = useState("");

    const options = useSelector(state => )
    const getOptions = () => {
        return
    }
    return (
        <div>
            {
                isNeedShowOptions ?

                    : null
            }
        </div>
    );
};

export default DropdownOptions;