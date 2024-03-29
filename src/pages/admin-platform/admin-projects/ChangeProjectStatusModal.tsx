import toast from "react-hot-toast";
import { projectService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, ChangeProjectStatusAction } from "../../../store";
import { ConfirmationModal } from "../../components";
import { ProjectStatus } from "../../../types";

type ChangeProjectStatusModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
    changeStatusTo: ProjectStatus;
};

const generateMessages = (status: ProjectStatus) => {
    const messages = {
        confirmation: "",
        success: ""
    };

    let actionVerb: string = status;
    let confirmVerb: string = status;
    if (status === "ONHOLD") {
        actionVerb = "PAUSE";
    }
    if (status === "COMPLETED" || status === "ARCHIVED") {
        confirmVerb = actionVerb.slice(0, actionVerb.length - 1);
    }
    if (status === "ACTIVE") {
        actionVerb = "ACTIVATED";
    }

    messages.confirmation = `Are you sure you want to ${confirmVerb} the project?`;
    messages.success = `Project has been successfully ${actionVerb}`;

    return messages;
};

const ChangeProjectStatusModal: React.FC<ChangeProjectStatusModalProps> = ({
    show,
    projectId,
    closeModal,
    changeStatusTo
}) => {
    const { dispatch } = useStore();

    const changeProjectStatus = () => {
        projectService
            .changeStatus(projectId, changeStatusTo)
            .then((_) => {
                const action: ChangeProjectStatusAction = {
                    type: Actions.CHANGE_PROJECT_STATUS,
                    payload: {
                        id: projectId,
                        status: changeStatusTo
                    }
                };
                dispatch(action);
                closeModal();
                toast.success(generateMessages(changeStatusTo).success);
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage={generateMessages(changeStatusTo).confirmation}
            show={show}
            cancel={closeModal}
            onConfirm={changeProjectStatus}
        />
    );
};

export { ChangeProjectStatusModal };
