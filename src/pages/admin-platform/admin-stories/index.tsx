import React, { useState, useEffect } from "react";
import { NoDataPlaceholder, PageHeader } from "../../components";
import noStory from "../../../assets/illustrations/no-story.svg";
import { useStore } from "../../../hooks";
import { storyService } from "../../../api";
import { AdminPopulateStoriesAction } from "../../../store";
import toast from "react-hot-toast";
import { Option } from "../../../design-system";
import { StoryFilters } from "./StoryFilters";
import { CreateStoryModal } from "./CreateStoryModal";

const AdminStoriesPage = () => {
    const [showCreateStoryModal, setShowCreateStoryModal] = useState(false);
    const [isStoriesFetching, setIsStoriesFetching] = useState(true);
    const [storyProjectFilter, setStoryProjectFilter] = useState("all");
    const {
        state: { stories },
        dispatch
    } = useStore();

    // useEffect(() => {
    //     const fetchStories = async () => {
    //         try {
    //             const response = await storyService.getAll();
    //             dispatch(AdminPopulateStoriesAction(response.data));
    //             setIsStoriesFetching(false);
    //         } catch (error) {
    //             console.error("Error fetching stories:", error);
    //             setIsStoriesFetching(false);
    //             toast.error("Failed to fetch stories.");
    //         }
    //     };

    //     fetchStories();
    // }, [dispatch]);

    const handleSetStoryProjectFilter = (filter: Option) => {
        setStoryProjectFilter(String(filter.value));
    };

    const storiesArr = Object.values(stories);
    const filteredStories =
        storyProjectFilter === "all"
            ? storiesArr
            : storiesArr.filter(
                  (story) => story.projectId === storyProjectFilter
              );

    return (
        <>
            {filteredStories.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noStory}
                    text="You don't have any Stories yet!"
                    buttonText="Add a Story"
                    buttonAction={() => setShowCreateStoryModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Stories"
                        actionButtonText="Create A Story"
                        actionButtonOnClick={() =>
                            setShowCreateStoryModal(true)
                        }
                    />
                    <StoryFilters
                        selectedProject={storyProjectFilter}
                        setSelectedProject={handleSetStoryProjectFilter}
                    />
                </>
            )}
            <CreateStoryModal
                show={showCreateStoryModal}
                closeModal={() => setShowCreateStoryModal(false)}
            />
        </>
    );
};

export { AdminStoriesPage };
