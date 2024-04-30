// reducers/storiesReducer.ts
import { produce } from "immer";
import { ActionType, Actions } from "../actions";
import { StoryState } from "../state";
import { ProjectWithStories } from "../../types";

const storiesReducer = produce((draft: StoryState, action: ActionType) => {
    switch (action.type) {
        case Actions.ADMIN_POPULATE_STORIES:
            const projectsWithStoriesArray =
                action.payload as ProjectWithStories[];
            projectsWithStoriesArray.forEach(
                (projectWithStories: ProjectWithStories) => {
                    // draft[projectWithStories.id] = projectWithStories.stories;
                }
            );
            break;
        // Add other cases if needed
        default:
            return draft;
    }
});

export { storiesReducer };
