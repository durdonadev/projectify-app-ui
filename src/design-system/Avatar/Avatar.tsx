import React, { FC } from "react";
import { trimWhiteSpaces, getNameInitials } from "../utils";
import { sizeClassNames, shapeClassNames } from "./classnames";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";
type AvatarShape = "rounded" | "circle";
type AvatarType = "initials" | "photo";

type AvatarProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    type?: AvatarType;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    imageUrl?: string;
};

const Avatar: FC<AvatarProps> = (props) => {
    const { size, shape, type, className, children, onClick, imageUrl } = props;

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    let typeElement: React.ReactNode = children;

    if (type === "initials" && typeof children === "string") {
        const initials = getNameInitials(children);
        typeElement = <span>{initials}</span>;
    } else if (type === "photo" && imageUrl) {
        typeElement = <img src={imageUrl} alt="Avatar" />;
    }

    const finalClassNames = `avatar ${sizeClassName} ${shapeClassName} ${
        className || ""
    }`;

    return (
        <button className={trimWhiteSpaces(finalClassNames)} onClick={onClick}>
            {typeElement}
        </button>
    );
};

export { Avatar };
