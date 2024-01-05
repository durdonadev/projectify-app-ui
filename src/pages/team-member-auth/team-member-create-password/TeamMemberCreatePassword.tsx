import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import teamWork from "../../../assets/images/team-work.jpg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
`;

const StyledEmailInput = styled(Input)`
    grid-column: 1 / 3;
`;

const StyledButton = styled(Button)`
    grid-column: 1 / 3;
`;

const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, passwordConfirm);
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Create Password">
            <Form onSubmit={createPassword} noValidate>
                <StyledEmailInput
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
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <StyledButton color="primary" size="lg" shape="rounded">
                    Create Password
                </StyledButton>
            </Form>
        </AuthWrapper>
    );
};

export { TeamMemberCreatePassword };
