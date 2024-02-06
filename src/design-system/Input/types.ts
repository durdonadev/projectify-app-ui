export type InputType = "text" | "email" | "password" | "tel" | "textarea";
export type InputShape = "rounded" | "circle";
export type InputSize = "sm" | "md" | "lg";

export type InputProps = {
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    id?: string;

    error?: boolean;
    shape?: InputShape;
    size?: InputSize;
    hintMessage?: string;
    labelText?: string;

    onChange: (value: string) => void;
    value: string;
};
