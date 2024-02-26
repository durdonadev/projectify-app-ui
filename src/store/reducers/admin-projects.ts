import { produce } from "immer";
import { ProjectState } from "../state";
import {
    ActionType,
    Actions,
    AddProjectsAction,
    ChangeProjectStatusAction,
    PopulateProjectsAction
} from "../actions";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADD_PROJECT: {
                const payload = action.payload as AddProjectsAction["payload"];
                draft[payload.id] = payload;
                return draft;
            }
            case Actions.POPULATE_PROJECTS: {
                const payload =
                    action.payload as PopulateProjectsAction["payload"];
                return payload.reduce((acc: ProjectState, project) => {
                    acc[project.id] = project;
                    return acc;
                }, {});
            }

            default:
                return draft;
        }
    }
);

export { adminProjectsReducer };
