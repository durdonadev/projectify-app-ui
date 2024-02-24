import { produce } from "immer";
import { ProjectState } from "../state";
import {
    ActionType,
    Actions,
    AdminAddProjectsAction,
    AdminPopulateProjectsAction
} from "../actions";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_ADD_PROJECT: {
                const payload =
                    action.payload as AdminAddProjectsAction["payload"];
                draft[payload.id] = payload;
                return draft;
            }
            case Actions.ADMIN_POPULATE_PROJECTS: {
                const payload =
                    action.payload as AdminPopulateProjectsAction["payload"];
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
