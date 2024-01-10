import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import teamWork from "../../../assets/images/team-work.jpg";
import { admin } from "../../../api";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await admin.signIn({
                email,
                password
            });
            localStorage.setItem("authTokem", token);
            navigate("/admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
        }
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Login">
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
                    disabled={isFormSubmitting}
                >
                    Login
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { AdminLogin };
