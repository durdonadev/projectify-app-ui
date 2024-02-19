import { useEffect, useState } from "react";
import styled from "styled-components";
import { NoDataPlaceholder } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";
import { teamMemberTasksService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../utils";
import { CreateTaskModal } from "./CreateTaskModal";
import { Kanban } from "./Kanban";
import { PageHeader } from "./PageHeader";
import toast from "react-hot-toast";

const PageBase = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
`;

const PageContent = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const TeamMemberTasksPage = () => {
    const [isTasksFetching, setIsTasksFetching] = useState(true);

    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

    const {
        state: { teamMemberPersonalTasks },
        dispatch
    } = useStore();

    useEffect(() => {
        teamMemberTasksService
            .getTasks()
            .then((data) => {
                setIsTasksFetching(false);
                const action: PopulateTasksAction = {
                    type: Actions.POPULATE_TASKS,
                    payload: data.data.tasks
                };
                dispatch(action);
            })
            .catch((e) => {
                const err = e as Error;
                setIsTasksFetching(false);
                toast.error(err.message);
            });
    }, []);

    if (isTasksFetching) {
        return null;
    }

    const tasksArray = Object.values(teamMemberPersonalTasks);

    const groupedTasks = groupTasksByStatus(tasksArray);

    return (
        <PageBase>
            {!tasksArray.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <PageContent>
                    <PageHeader
                        openCreateTaskModal={() => setShowCreateTaskModal(true)}
                    />
                    <Kanban groupedTasks={groupedTasks} />
                </PageContent>
            )}
            <CreateTaskModal
                show={showCreateTaskModal}
                closeModal={() => setShowCreateTaskModal(false)}
            />
        </PageBase>
    );
};

export { TeamMemberTasksPage };
