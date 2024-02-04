import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import forgotPassword from "../../../assets/illustrations/forgot-password.svg";
import { teamMemberService } from "../../../api";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const isFormSubmittable = email;

    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await teamMemberService.forgotPassword(email);

            setIsFormSubmitting(false);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                toast.error(error.message);
            }
        }
    };

    return (
        <PasswordWrapper pageTitle="Forgot Password?" imageUrl={forgotPassword}>
            <Form onSubmit={getInstructions} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Get Instructions
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { TeamMemberForgotPassword };
