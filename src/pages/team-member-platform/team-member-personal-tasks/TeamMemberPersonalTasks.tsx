import { useState } from "react";
import styled from "styled-components";
import {
    Input,
    Modal,
    Typography,
    Button,
    Toaster,
    DatePickerV1
} from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";
import toast from "react-hot-toast";
import { teamMemberPersonalTasks } from "../../../api";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateTaskModalTitle = styled(Typography)`
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

const TeamMemberPersonalTasks = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [due, setDue] = useState<Date>();
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnChangeDue = (value: Date) => {
        setDue(value);
    };

    const isFormSubmittable = title && description && due;

    const createTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMemberPersonalTasks.createTask({
                title,
                description,
                due
            });
            setIsFormSubmitting(false);
            setTitle("");
            setDescription("");
            setDue(undefined);
            setShowCreateTaskModal(false);

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
        <>
            {" "}
            <PageBase>
                {!tasks.length ? (
                    <NoDataPlaceholder
                        illustrationUrl={noTask}
                        text="You don't have any tasks yet!"
                        buttonText="Add a Task"
                        buttonAction={() => setShowCreateTaskModal(true)}
                    />
                ) : (
                    <h1>Tasks</h1>
                )}

                <Modal show={showCreateTaskModal} position="center">
                    <form onSubmit={createTask} noValidate>
                        <CreateTaskModalTitle
                            variant="paragraphLG"
                            weight="medium"
                        >
                            New Task
                        </CreateTaskModalTitle>
                        <Inputs>
                            <Input
                                placeholder="Task"
                                value={title}
                                onChange={handleOnChangeTitle}
                                shape="rounded"
                                size="lg"
                            />
                            <Input
                                type="textarea"
                                placeholder="Description"
                                value={description}
                                onChange={handleOnChangeDescription}
                                shape="rounded"
                                size="lg"
                            />
                            <DatePickerV1
                                inputSize="lg"
                                shape="rounded"
                                placeholder="Due Date"
                                selected={due}
                                onChange={handleOnChangeDue}
                            />
                        </Inputs>
                        <Buttons>
                            <Button
                                color="secondary"
                                size="lg"
                                shape="rounded"
                                variant="outlined"
                                fullWidth
                                onClick={() => setShowCreateTaskModal(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                size="lg"
                                shape="rounded"
                                color="primary"
                                fullWidth
                                disabled={
                                    isFormSubmitting || !isFormSubmittable
                                }
                            >
                                Save
                            </Button>
                        </Buttons>
                    </form>
                </Modal>
            </PageBase>
            <Toaster />
        </>
    );
};

export { TeamMemberPersonalTasks };
