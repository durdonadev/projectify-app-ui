export type IconName =
    | "tasks"
    | "support"
    | "stories"
    | "settings"
    | "projects"
    | "members"
    | "log-out"
    | "chevron-right"
    | "flag"
    | "check";

export type IconProps = {
    iconName: IconName;
    className?: string;
    height?: string;
    width?: string;
};
