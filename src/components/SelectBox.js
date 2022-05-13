import React from "react";
import Select from "react-select";
import '../pages/Discover/Discover.css'

export default function SelectBox({
    label,
    options,
    placeholder,
    name,
    optionSelected,
}) {
    return (
        <>
            <label htmlFor={name} className="discover-form-input-label">
                {label}
            </label>
            <Select
                name={name}
                options={options}
                placeholder={placeholder}
                onChange={(e) => optionSelected(e.value)}
                className="discover-form-select"
            />
        </>
    );
}