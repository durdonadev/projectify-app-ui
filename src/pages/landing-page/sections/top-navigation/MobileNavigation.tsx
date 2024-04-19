import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Logo } from "../../../../design-system";
import { Link } from "react-router-dom";
import closeIcon from "../../../../assets/images/close.svg";

const CloseButton = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
        height: 3rem;
        width: 3rem;
    }
`;

const Padding = css`
    @media screen and (max-width: 50em) {
        padding-right: var(--space-12);
        padding-left: var(--space-12);
    }

    @media screen and (max-width: 30em) {
        padding-right: var(--space-10);
        padding-left: var(--space-10);
    }
`;

const MobileNavOverlay = styled.div<{ show: boolean }>`
    position: fixed;
    bottom: 0;
    right: 0;
    height: ${(props) => (props.show ? "100%" : "0%")};
    width: ${(props) => (props.show ? "100%" : "0%")};
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0;
    padding-right: 0;

    ${(props) =>
        props.show &&
        css`
            ${Padding}
        `};
    background-color: rgba(16, 24, 40, 0.1);
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 50em) {
        display: none;
    }
`;

const MobileNavContent = styled.div`
    width: 50%;
    border-radius: var(--border-radius-10);
    background-color: var(--white);

    @media screen and (max-width: 40em) {
        width: 100%;
    }
`;

const MobileNavHeader = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    border-bottom: 1px solid var(--gray-200);
    border-top-right-radius: var(--border-radius-10);
    border-top-left-radius: var(--border-radius-10);

    ${Padding}
    padding-left: var(--space-16);

    @media screen and (max-width: 40em) {
        justify-content: space-between;
    }
`;

const MobileNavLinks = styled.div`
    padding-top: var(--space-32);
    padding-bottom: var(--space-32);

    list-style-type: none;

    padding-left: var(--space-16);
    li:not(:last-child) {
        margin-bottom: var(--space-16);
    }
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;

    @media screen and (min-width: 40em) {
        display: none;
    }
`;

interface MobileNavProps {
    children: React.ReactElement;
    onClose: () => void;
    show: boolean;
}
const MobileNavigation: FC<MobileNavProps> = ({ children, onClose, show }) => {
    return (
        <MobileNavOverlay show={show}>
            <MobileNavContent>
                <MobileNavHeader>
                    <LogoLink to="/">
                        <Logo size="sm" layout="horizontal" />
                    </LogoLink>

                    <CloseButton onClick={onClose}>
                        <img src={closeIcon} alt="Close" />
                    </CloseButton>
                </MobileNavHeader>
                <MobileNavLinks>{children}</MobileNavLinks>
            </MobileNavContent>
        </MobileNavOverlay>
    );
};

export { MobileNavigation };
