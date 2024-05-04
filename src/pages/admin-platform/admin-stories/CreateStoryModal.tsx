import styled from "styled-components";

import {
    Input,
    Button,
    Typography,
    DatePickerV1,
    Modal,
    Select,
    Option
} from "../../../design-system";
import { useEffect, useState } from "react";
import { projectService, storyService } from "../../../api";
import toast from "react-hot-toast";
import { toIso8601 } from "../../../utils";
import { Actions, AddStoryAction } from "../../../store";
import { useStore } from "../../../hooks";
import { ProjectWithContributors } from "../../../types";

type CreateStoryModalProps = {
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

const CreateStoryModal: React.FC<CreateStoryModalProps> = ({
    show,
    closeModal
}) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [point, setPoint] = useState<string>("");
    const [due, setDue] = useState<Date | null>();
    const [projectId, setProjectId] = useState<string>("");
    const [assigneeId, setAssigneeId] = useState<string>("");

    type OptionValue = string | number;

    const [selectedProject, setSelectedProject] = useState<
        OptionValue | undefined
    >(undefined);
    const [projectOptions, setProjectOptions] = useState<Option[]>([]);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const { dispatch } = useStore();

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnChangePoint = (value: string) => {
        setPoint(value);
    };

    const isFormSubmittable = title && description && point && due;

    const clearFields = () => {
        setTitle("");
        setDescription("");
        setPoint("");
        setDue(null);
        setProjectId("");
        setAssigneeId("");
    };

    const cancel = () => {
        clearFields();
        closeModal();
    };

    const createStory = () => {
        const input = {
            title,
            description,
            point,
            due: toIso8601(due!),
            projectId,
            assigneeId
        };
        try {
            storyService
                .create(input)
                .then((data) => {
                    const action: AddStoryAction = {
                        type: Actions.ADMIN_ADD_STORY,
                        payload: data.data
                    };
                    dispatch(action);
                    clearFields();
                    closeModal();
                    toast.success("Story has been successfully created");
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        } catch (error) {}
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectService.getAll();
                const projects: ProjectWithContributors[] = response.data;

                const options = projects.map((project) => ({
                    label: project.name,
                    value: project.id
                }));
                setProjectOptions(options);
                setIsProjectsFetching(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsProjectsFetching(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Story
            </ModalTitle>
            <Inputs>
                <Select
                    value={selectedProject}
                    onSelect={(option) => setSelectedProject(option?.value)}
                    options={projectOptions}
                    shape="rounded"
                    size="md"
                    headerPlaceholder="Project"
                />
                <Input
                    type="text"
                    placeholder="Story Title"
                    value={title}
                    onChange={handleOnChangeTitle}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Story Description"
                    value={description}
                    onChange={handleOnChangeDescription}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Story Point"
                    value={point}
                    onChange={handleOnChangePoint}
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Start Date"
                    selected={due}
                    onChange={(date) => setDue(date)}
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={cancel}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    disabled={isFormSubmitting || !isFormSubmittable}
                    onClick={createStory}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateStoryModal };
