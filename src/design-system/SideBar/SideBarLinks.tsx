import React from "react";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";
type SideBarLink = {
    linkText: string;
    linkTo: string;
    iconName: string;
};

type SideBarLinksGroup = {
    title: string;
    links: SideBarLink[];
};

type SideBarLinksProps = { links: SideBarLinksGroup[] };

const SideBarLinks: React.FC<SideBarLinksProps> = ({ links }) => {
    return (
        <div>
            {links.map((group) => {
                return (
                    <div>
                        <Typography variant="subtitleMD" weight="semibold">
                            {group.title}
                        </Typography>
                        <ul>
                            {group.links.map((link) => {
                                return (
                                    <li>
                                        <Link to={link.linkTo}>
                                            <Icon iconName={link.iconName} />
                                            {link.linkText}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export { SideBarLinks };
