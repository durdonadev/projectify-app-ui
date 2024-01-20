import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";

import { Button, Input } from "../../../design-system";
import { AuthActionLink, AuthWrapper } from "../../components";
import teamWork from "../../../assets/images/team-work.jpg";
import { admin } from "../../../api";
import { useLocalStorage } from "../../../hooks";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    align-items: center;
`;

const AdminSignin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { setItem } = useLocalStorage();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const isFormSubmittable = email && password;

    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await admin.signIn({
                email,
                password
            });

            saveAuthToken(token);
            navigate("/admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper imageUrl={teamWork} pageTitle="Sign In">
                <Form onSubmit={signin} noValidate>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />

                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        fullWidth={true}
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Sign In
                    </Button>
                </Form>
                <ActionLinks>
                    <AuthActionLink
                        linkText="Forgot Password?"
                        linkTo="../admin/forgot-password"
                    />
                    <AuthActionLink
                        hintText="Don't have an account?"
                        linkText="Sign Up"
                        linkTo="../admin/sign-up"
                    />
                </ActionLinks>
            </AuthWrapper>
        </>
    );
};

export { AdminSignin };
