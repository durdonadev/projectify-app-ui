import React, { FC } from "react";
import { trimWhiteSpaces } from "../utils";
import {
    colorClassNames,
    iconClassNames,
    shapeClassNames,
    variantClassNames
} from "./classnames";
import "./Badge.css";
import { Icon } from "../Icon";

type BadgeIcon = "flag" | "check";
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
    icon?: BadgeIcon;
    shape?: BadgeShape;
    color?: BadgeColor;
    variant?: BadgeVariant;
    className?: string;
    children: React.ReactNode;
};

const Badge: FC<BadgeProps> = (props) => {
    const { icon, shape, color, variant, className, children } = props;

    const iconClassName = icon !== undefined ? iconClassNames[icon] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = trimWhiteSpaces(
        `badge ${iconClassName} ${colorClassName} ${shapeClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return (
        <span className={trimWhiteSpaces(finalClassNames)}>
            {icon ? (
                <Icon iconName={icon} height="1.6rem" width="1.6rem" />
            ) : null}
            {children}
        </span>
    );
};

export { Badge };
