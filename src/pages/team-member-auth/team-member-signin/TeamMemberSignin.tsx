import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import styled from "styled-components";
import { Button, Input } from "../../../design-system";
import { AuthActionLink, AuthWrapper } from "../../components";
import { teamMemberService } from "../../../api";
import office from "../../../assets/images/office.jpg";
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

const TeamMemberSignin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();
    const { setItem } = useLocalStorage();

    const [searchParams] = useSearchParams();
    const inviteToken = searchParams.get("inviteToken");

    useEffect(() => {
        if (!inviteToken) navigate("/team-member/sign-in");
    }, [inviteToken, navigate]);

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
            const { token } = await teamMemberService.signIn({
                email,
                password
            });

            saveAuthToken(token);
            navigate("/team-member/platform");

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
        <AuthWrapper imageUrl={office} pageTitle="Sign In">
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

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Sign In
                </Button>
            </Form>
            <ActionLinks>
                <AuthActionLink
                    linkText="Forgot Password?"
                    linkTo="../team-member/forgot-password"
                />
                <AuthActionLink
                    hintText="Have not created password yet?"
                    linkText="Create Password"
                    linkTo="../team-member/create-password"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { TeamMemberSignin };
