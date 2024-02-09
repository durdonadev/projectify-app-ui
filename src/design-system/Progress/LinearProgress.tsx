import React from "react";
import "./LinearProgress.css";
import { LinearProgressProps, ProgressColor } from "./types";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";

const getFinalClassName = (
    color: ProgressColor | undefined,
    error: boolean | undefined,
    value: number
) => {
    const colorClassNames = {
        orange: "linear-progress--orange",
        blue: "linear-progress--blue",
        green: "linear-progress--green",
        red: "linear-progress--red"
    };

    const colorClassName = color ? colorClassNames[color] : "";
    const isCompleted = value === 100;

    if (error) {
        return `${colorClassName} linear-progress--error`;
    }

    if (isCompleted) {
        return `${colorClassName} linear-progress--completed`;
    }

    return colorClassName;
};

const LinearProgress: React.FC<LinearProgressProps> = ({
    color,
    value,
    error,
    className,
    shape
}) => {
    const shapeClassName = shape ? "linear-progress--rounded" : "";
    const finalClassName = trimWhiteSpaces(
        `linear-progress ${shapeClassName} ${getFinalClassName(
            color,
            error,
            value
        )} ${className || ""}`
    );

    const renderIndicator = () => {
        if (error) return <Icon iconName="info-in-circle" />;
        if (value === 100) return <Icon iconName="check-in-circle" />;

        return <span>{value}</span>;
    };
    return (
        <div className={finalClassName}>
            <div className="linear-progress__max">
                <div
                    className="linear-progress__progress"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
            <div className="linear-progress__progress-indicator">
                {renderIndicator()}
            </div>
        </div>
    );
};

export { LinearProgress };
