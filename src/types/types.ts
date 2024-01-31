export enum UserRole {
    admin = "admin",
    teamMember = "teamMember"
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    role: UserRole;
    imageUrl?: string;
}

export interface AdminUser extends User {
    preferredFirstName: string;
    company: {
        name: string;
        position: string;
    } | null;
}

export interface TeamMemberUser extends User {
    position: string;
    status: string;
    adminId: string;
}

export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

export interface Task {
    id: string;
    title: string;
    description: string;
    due: string;
    status: TaskStatus;
}

export type ProjectStatus = "ACTIVE" | "ARCHIVED";

export interface Project {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
}