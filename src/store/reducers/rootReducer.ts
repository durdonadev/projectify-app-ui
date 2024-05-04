import { userReducer } from "./user";
import { adminTasksReducer } from "./admin-tasks";
import { GlobalState } from "../state";
import { ActionType } from "../actions";
import { teamMemberTasksReducer } from "./team-member-tasks";
import { adminTeamMembersReducer } from "./admin-team-members";
import { adminProjectsReducer } from "./admin-projects";
import { storiesReducer } from "./stories";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        ),
        projects: adminProjectsReducer(state.projects, action),
        stories: storiesReducer(state.stories, action)
    };

    return newState;
};

export { rootReducer };
