import { FC, ReactNode } from "react";
import { Typography } from "../../../design-system";
import "./ContentDefaultWrapper.css";

type MainContentDefaultWrapperProps = {
    imageUrl: string;
    title: string;
    children: ReactNode;
};

const MainContentDefaultWrapper: FC<MainContentDefaultWrapperProps> = ({
    imageUrl,
    title,
    children
}) => {
    return (
        <div className="content-default__wrapper">
            <div className="content-default__content">
                <img src={imageUrl} alt={title} />
                <Typography variant="paragraphLG" className="title">
                    {title}
                </Typography>{" "}
                {children}
            </div>
        </div>
    );
};

export { MainContentDefaultWrapper };
