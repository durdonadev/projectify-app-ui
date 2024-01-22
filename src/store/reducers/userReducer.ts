import {
    ActionType,
    Actions,
    CreateTaskAction,
    PopulateTasksAction
} from "../actions";
import { GlobalState, initialState } from "../state";

export const userReducer = (
    state: GlobalState,
    action: ActionType
): GlobalState => {
    if (action.type === Actions.INIT_USER) {
        return {
            ...state,
            user: action.payload
        };
    } else if (action.type === Actions.RESET_STATE) {
        return initialState;
    } else if (action.type === Actions.POPULATE_TASKS) {
        return {
            ...state,
            adminPersonalTasks: (action as PopulateTasksAction).payload
        };
    } else if (action.type === Actions.ADD_TASK) {
        if (state.adminPersonalTasks) {
            return {
                ...state,
                adminPersonalTasks: [
                    ...state.adminPersonalTasks,
                    (action as CreateTaskAction).payload
                ]
            };
        } else {
            return {
                ...state,
                adminPersonalTasks: [(action as CreateTaskAction).payload]
            };
        }
    }

    return state;
};
