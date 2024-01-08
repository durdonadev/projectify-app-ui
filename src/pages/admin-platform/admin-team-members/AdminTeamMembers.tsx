import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noMember from "../../../assets/illustrations/no-member.svg";

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
                <CreateMemberModalTitle variant="paragraphLG" weight="medium">
                    New Member
                </CreateMemberModalTitle>
                <Inputs>
                    <Input
                        placeholder="First Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Last Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Position"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
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
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { AdminTeamMembers };
