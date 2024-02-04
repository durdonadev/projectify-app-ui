import { SelectProps } from "./types";
import { useState } from "react";
import { Label } from "../Label";
import { Button } from "../Button";
import "./Select.css";
import { trimWhiteSpaces } from "../utils";

const sizeClassNames = {
    md: "select-medium",
    lg: "select-large"
};

const shapeClassNames = {
    rounded: "select-rounded",
    circle: "select-circle"
};

const Select: React.FC<SelectProps> = (props) => {
    const {
        options,
        value,
        onSelect,
        label,
        headerPlaceholder,
        size,
        shape,
        disabled,
        error,
        hintMessage,
        searchable,
        className
    } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    const onClickHeader = () => {
        setExpanded((prevValue) => !prevValue);
    };

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    const finalClassName = trimWhiteSpaces(
        `select ${sizeClassName} ${shapeClassName} ${className || ""}`
    );

    return (
        <div className={finalClassName}>
            {label && <Label>{label}</Label>}
            <Button
                size={size}
                shape={shape}
                variant="outlined"
                color="secondary"
                onClick={onClickHeader}
                className="select__header"
                disabled={disabled}
                fullWidth
            >
                {headerPlaceholder}
            </Button>
            {expanded && (
                <ul className="select__body">
                    {options.map((option) => {
                        return (
                            <li key={option.value} className="select__item">
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export { Select };
