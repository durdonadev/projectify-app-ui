export type ProgressColor = "orange" | "blue" | "green" | "red";

export interface LinearProgressProps {
    color?: ProgressColor;
    value: number;
    error?: boolean;
    rounded?: boolean;
    className?: string;
}
