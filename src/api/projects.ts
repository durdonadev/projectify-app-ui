import {
    Project,
    ProjectStatus,
    ProjectStatusChange,
    ProjectUpdate,
    ProjectWithContributors
} from "../types";

type CreateInput = Omit<Project, "id" | "status" | "progress">;
type CreateAPIResponse = {
    data: Project;
};

type GetAllAPIResponse = {
    data: ProjectWithContributors[];
};

class ProjectService {
    url: string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL
                : process.env.REACT_APP_PROJECTIFY_API_URL
        }/projects`;
    }

    async create(input: CreateInput): Promise<CreateAPIResponse> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}/`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async getAll(): Promise<GetAllAPIResponse> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}`, {
                headers: {
                    authorization: `Bearer ${authToken}`
                }
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async changeStatus(projectId: string, status: ProjectStatus) {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(
                `${this.url}/${projectId}/change-status`,
                {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ status })
                }
            );
            console.log(projectId);
            console.log("project satus:" + status);

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }

    async update(projectId: string, updateData: ProjectUpdate) {
        const rawAuthToken = localStorage.getItem("authToken");
        const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";

        try {
            const response = await fetch(`${this.url}/${projectId}/update`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }
}

export const projectService = new ProjectService();
