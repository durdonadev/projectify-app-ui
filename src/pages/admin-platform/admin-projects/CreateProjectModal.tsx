import styled from "styled-components";

import {
    Input,
    Button,
    Typography,
    DatePickerV1,
    Modal
} from "../../../design-system";
import { useState } from "react";

type CreateProjectModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ModalTitle = styled(Typography)`
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

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
    show,
    closeModal
}) => {
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Project
            </ModalTitle>
            <Inputs>
                <Input
                    placeholder="Project Name"
                    value=""
                    onChange={() => {}}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Project Description"
                    value=""
                    onChange={() => {}}
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Start Date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="End Date"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => closeModal()}
                >
                    Cancel
                </Button>
                <Button size="lg" shape="rounded" color="primary" fullWidth>
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateProjectModal };
