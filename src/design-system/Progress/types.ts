export type ProgressColor = "orange" | "blue" | "green" | "red";

export interface LinearProgressProps {
    color?: ProgressColor;
    value: number;
    error?: boolean;
    shape?: "rounded";
    className?: string;
}
