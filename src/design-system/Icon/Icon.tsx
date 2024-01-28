import React from "react";
import sprite from "./sprite.svg";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ iconName, className, height, width }) => {
    return (
        <svg
            height={height || "2.4rem"}
            width={width || "2.4rem"}
            className={className || ""}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };
