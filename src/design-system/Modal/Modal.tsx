import React from "react";
import { positionClassNames } from "./classNames";
import "./Modal.css";
import { trimWhiteSpaces } from "../utils";
import xIcon from "../../assets/images/close.svg";

interface ModalProps {
    show: boolean;
    position: "center" | "right";
    closeIcon?: string;
    onClose?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    show,
    position,
    closeIcon,
    onClose,
    className,
    children
}) => {
    const positionClassName = positionClassNames[position];
    const finalOverlayClassNames = trimWhiteSpaces(
        `modal-overlay ${positionClassName} ${className || ""}`
    );

    return (
        <>
            {show && (
                <div className={finalOverlayClassNames}>
                    <div className="modal">
                        {closeIcon && (
                            <button onClick={onClose} className="close-btn">
                                <img
                                    className="close-icon"
                                    src={xIcon}
                                    alt="Close"
                                />
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export { Modal };
