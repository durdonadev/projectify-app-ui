import React, { FC } from "react";
import { trimWhiteSpaces } from "../utils";
import {
    colorClassNames,
    shapeClassNames,
    variantClassNames
} from "./classnames";
import "./Badge.css";

type BadgeShape = "rounded" | "circle";
type BadgeColor =
    | "violet"
    | "orange"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "grey";
type BadgeVariant = "lightBg" | "stroke";

type BadgeProps = {
    shape?: BadgeShape;
    color?: BadgeColor;
    variant?: BadgeVariant;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
};

const Badge: FC<BadgeProps> = (props) => {
    const { shape, color, variant, className, children, onClick } = props;

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = trimWhiteSpaces(
        `badge ${colorClassName} ${shapeClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return (
        // <div className="budge-wrapper">
        <span className={trimWhiteSpaces(finalClassNames)} onClick={onClick}>
            {children}
        </span>
        // </div>
    );
};

export { Badge };
