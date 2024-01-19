import { UserType } from "../../types";

export enum Actions {
    INIT_USER = "INIT_USER",
    SOME_TEST = "RESET_STATE"
}

export interface InitUserAction {
    type: Actions;
    payload: UserType;
}

export interface UpdateProject {
    type: Actions.SOME_TEST;
}

export type ActionType = InitUserAction | UpdateProject;
