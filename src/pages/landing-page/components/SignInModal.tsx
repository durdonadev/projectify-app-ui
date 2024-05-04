import styled from "styled-components";
import { Typography, Modal, Button } from "../../../design-system";
import { useNavigate } from "react-router-dom";

type CreateTaskModalProps = {
    show: boolean;
    closeModal: () => void;
};

const StyledModal = styled(Modal)`
    z-index: 5;
`;

const ModalTitle = styled(Typography)`
    text-align: center;
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-30);
`;

const SignInModal: React.FC<CreateTaskModalProps> = ({ show, closeModal }) => {
    const navigate = useNavigate();

    return (
        <StyledModal
            show={show}
            position="center"
            closeIcon="true"
            onClose={closeModal}
        >
            <ModalTitle variant="paragraphLG" weight="medium">
                To begin, please select your role and sign in:
            </ModalTitle>
            <Buttons>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("admin/sign-in");
                    }}
                >
                    Admin
                </Button>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("team-member/sign-in");
                    }}
                >
                    Team Member
                </Button>
            </Buttons>
        </StyledModal>
    );
};

export { SignInModal };
