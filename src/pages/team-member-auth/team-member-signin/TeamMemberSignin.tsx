import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styled from "styled-components";

import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import { teamMember } from "../../../api";
import teamWork from "../../../assets/images/team-work.jpg";
import { useLocalStorage } from "../../../hooks";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberSignin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();
    const [setItem, getItem] = useLocalStorage();

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
            const response = await teamMember.signIn({
                email,
                password
            });
            localStorage.setItem("authTokem", response.token);
            setItem("authToken", response.token);
            navigate("/team-member/platform");

            setIsFormSubmitting(false);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Sign In">
            <Form onSubmit={signin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Sign In
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { TeamMemberSignin };
