import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noMember from "../../../assets/illustrations/no-member.svg";
import toast from "react-hot-toast";
import { teamMember } from "../../../api";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateMemberModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const AdminTeamMembers = () => {
    const [members, setMembers] = useState<string[]>([]);
    const [showCreateMemberModal, setShowCreateMemberModal] =
        useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const addTeamMember = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);
            const response = await teamMember.add({
                firstName,
                lastName,
                email,
                position
            });
            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPosition("");
            setShowCreateMemberModal(false);

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
        <PageBase>
            {!members.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noMember}
                    text="You don’t have any team-members yet!"
                    buttonText="Add a Member"
                    buttonAction={() => setShowCreateMemberModal(true)}
                />
            ) : (
                <h1>Team-Members</h1>
            )}

            <Modal show={showCreateMemberModal} position="center">
                <form onSubmit={addTeamMember} noValidate>
                    <CreateMemberModalTitle
                        variant="paragraphLG"
                        weight="medium"
                    >
                        New Member
                    </CreateMemberModalTitle>
                    <Inputs>
                        <Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleOnChangeFirstName}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                        <Input
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleOnChangeLastName}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                        <Input
                            placeholder="Position"
                            value={position}
                            onChange={handleOnChangePosition}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleOnChangeEmail}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                    </Inputs>
                    <Buttons>
                        <Button
                            color="secondary"
                            size="lg"
                            shape="rounded"
                            variant="outlined"
                            fullWidth
                            onClick={() => setShowCreateMemberModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="lg"
                            shape="rounded"
                            color="primary"
                            fullWidth
                        >
                            Save
                        </Button>
                    </Buttons>
                </form>
            </Modal>
        </PageBase>
    );
};

export { AdminTeamMembers };
