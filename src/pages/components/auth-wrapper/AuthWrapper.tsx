import { FC, ReactNode } from "react";
import { Logo } from "../../../design-system/Logo";
import "./AuthWrapper.css";
import styled from "styled-components";

type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
    pageTitle: string;
};

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
`;

const AuthForm = styled.section`
    grid-column: 1 / 2;
    padding: var(--space-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-50);
    flex-basis: 57rem;
`;

const AuthImageWrapper = styled.section`
    grid-column: 2 / 3;
    padding: var(--space-50);

    img {
        height: 100%;
        width: 100%;
        border-radius: var(--space-50);
        object-fit: cover;
    }
`;

const AuthImage = styled.img.attrs({
    alt: "Office"
})``;

const AuthWrapper: FC<AuthWrapperProps> = ({
    imageUrl,
    pageTitle,
    children
}) => {
    return (
        <Wrapper>
            <AuthForm>
                <AuthContent>
                    <Logo layout="vertical" size="lg" customText={pageTitle} />
                    {children}
                </AuthContent>
            </AuthForm>
            <AuthImageWrapper>
                <AuthImage src={imageUrl} />
            </AuthImageWrapper>
        </Wrapper>
    );
};

export { AuthWrapper };
