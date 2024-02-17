import { useEffect, useState } from "react";
import styled from "styled-components";
import { parseISO } from "date-fns";
import {
    Modal,
    Typography,
    Button,
    Input,
    DatePickerV1,
    Select,
    Icon
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { TeamMemberStatus } from "../../../types";
import { TeamMemberUpdateInput, teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { Actions, AdminUpdateTeamMemberAction } from "../../../store";
import { positions } from "./CreateTeamMemberModal";
import { ChangePasswordModal } from "./ChangePasswordModal";

type EditTeamMemberModalProps = {
    show: boolean;
    closeModal: () => void;
    teamMemberId: string;
};

const EditTeamMemberModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;

const ActionLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--space-24);
    align-items: center;
    cursor: pointer;

    .plus-icon {
        fill: var(--primary-500);
        height: 1.6rem;
        width: 1.6rem;
        margin-right: 0.6rem;
    }

    .update-password__link {
        color: var(--primary-500);
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const EditTeamMemberModal: React.FC<EditTeamMemberModalProps> = ({
    show,
    closeModal,
    teamMemberId
}) => {
    const {
        dispatch,
        state: { adminTeamMembers }
    } = useStore();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState<TeamMemberStatus>();
    const [joinDate, setJoinDate] = useState<Date>();
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const [selectedTeamMemberId, setSelectedTeamMemberId] = useState("");
    const [showChangePasswordModal, setShowChangePasswordModal] =
        useState(false);

    useEffect(() => {
        const teamMember = adminTeamMembers.find(
            (teamMember) => teamMember.id === teamMemberId
        );

        if (teamMember) {
            setFirstName(teamMember.firstName);
            setLastName(teamMember.lastName);
            setEmail(teamMember.email);
            setStatus(teamMember.status);
            setPosition(teamMember.position);
            setJoinDate(parseISO((teamMember?.joinDate).toString()));
        }
    }, [teamMemberId]);

    const handleOnClickUpdatePassword = (teamMemberId: string) => {
        setSelectedTeamMemberId(teamMemberId);
        setShowChangePasswordModal(true);
    };

    const updateTeamMember = () => {
        const updatedTeamMember: TeamMemberUpdateInput = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            email: email,
            joinDate: joinDate
        };
        setIsFormSubmitting(true);
        teamMemberService
            .update(teamMemberId, updatedTeamMember)
            .then((_) => {
                setIsFormSubmitting(false);
                const action: AdminUpdateTeamMemberAction = {
                    type: Actions.ADMIN_UPDATE_TEAM_MEMBER,
                    payload: {
                        id: teamMemberId,
                        status: status!,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        position: position,
                        joinDate: joinDate as Date
                    }
                };
                dispatch(action);
                closeModal();
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(true);
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <EditTeamMemberModalTitle variant="paragraphLG" weight="medium">
                Edit Team Member
            </EditTeamMemberModalTitle>
            <Inputs>
                <Input
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={email}
                    onChange={(value) => setEmail(value)}
                    shape="rounded"
                    size="lg"
                />
                <Select
                    options={positions}
                    onSelect={(option) => setPosition(option.label)}
                    value={position}
                    size="lg"
                    shape="rounded"
                    headerPlaceholder="Select Position"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Join Date"
                    selected={joinDate}
                    onChange={(date) => setJoinDate(date)}
                />
            </Inputs>
            <ActionLink
                onClick={() => handleOnClickUpdatePassword(teamMemberId)}
            >
                <Icon iconName="plus" className="plus-icon" />
                <Typography
                    variant="paragraphSM"
                    className="update-password__link"
                >
                    Update Password
                </Typography>
                <ChangePasswordModal
                    show={showChangePasswordModal}
                    teamMemberId={selectedTeamMemberId}
                    closeModal={() => setShowChangePasswordModal(false)}
                />
            </ActionLink>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={closeModal}
                    disabled={isFormSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={updateTeamMember}
                    disabled={isFormSubmitting}
                >
                    Update
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditTeamMemberModal };
