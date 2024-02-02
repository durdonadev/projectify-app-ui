import { Task, AdminUser, TeamMemberUser } from "../../types";

export interface GlobalState {
    user: AdminUser | TeamMemberUser | null;
    adminPersonalTasks: Task[];
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: []
};
