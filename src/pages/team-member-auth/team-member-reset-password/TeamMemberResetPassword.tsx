import { useState } from "react";
import styled from "styled-components";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import resetPasswordImg from "../../../assets/illustrations/reset-password.svg";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPassword, passwordConfirm);
    };

    return (
        <PasswordWrapper
            pageTitle="Update Password?"
            imageUrl={resetPasswordImg}
        >
            <Form onSubmit={resetPassword} noValidate>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
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
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Reset My Password
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { TeamMemberResetPassword };
