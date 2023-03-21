import React, {useState} from 'react';
import classes from './filters.module.sass'
import NameFilter from "./NameFilter/NameFilter";
import DropdownFilter from "./dropDownFilter/dropdownFilter";
import DropdownOptions from "./dropDownFilter/DropdownSelectFilter/dropdownOptions";
import InputDate from "./dropDownFilter/InputDate/inputDate";
import {useAppSelector} from "../../app/hooks";

export const Filters: React.FC = () => {
    const [isNeedShowOptions, setIsNeedShowOptions] = useState(false);
    const callbackIsNeedShowOptions = (flag: boolean) => {
        setIsNeedShowOptions(flag);
    }

    // const {authors: {list: []}, paintings: {list: []}}

    const getAuthors = useAppSelector(state => state.authors.list.map(item => {
        return {
            text: item.name,
            id: item.id,
        }
    }))

    return (
        <div className={classes.Filters}>
            <NameFilter
                onSubmit={() => {}}
            />
            <DropdownFilter
                content="Дата"
                show={callbackIsNeedShowOptions}
                options={<InputDate isNeedShowOptions={isNeedShowOptions}/>}
            />

        </div>
    );
};