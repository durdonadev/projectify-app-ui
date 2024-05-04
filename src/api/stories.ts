import { Story, ProjectWithStories } from "../types";

type CreateInput = Omit<Story, "id" | "status" | "subTasks">;
type CreateAPIResponse = {
    data: Story;
};

type GetAllAPIResponse = {
    data: ProjectWithStories[];
};

class StoryService {
    url: string;
    constructor() {
        this.url = `${process.env.REACT_APP_PROJECTIFY_API_URL}/stories`;
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
            const response = await fetch(`${this.url}/:projectId`, {
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
}

export const storyService = new StoryService();
