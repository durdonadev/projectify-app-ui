import { userReducer } from "./userReducer";
import { adminTasksReducer } from "./adminTasksReducer";
import { GlobalState } from "../state";
import { ActionType } from "../actions";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action)
    };

    return newState;
};

export { rootReducer };
