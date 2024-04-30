import styled from "styled-components";
import { Option, Select } from "../../../design-system";
import React, { useState, useEffect } from "react";
import { PageFilters } from "../../components/PageFilters";
import { projectService } from "../../../api"; // Import the projectService from your API file
import { ProjectWithContributors } from "../../../types"; // Import the necessary types

type StoryFiltersProps = {
    selectedProject: string;
    setSelectedProject: (option: Option) => void;
};

const Filters = styled(PageFilters)`
    .story-filter {
        margin-right: auto;
        justify-content: space-between;
    }
`;

const StoryFilters: React.FC<StoryFiltersProps> = ({
    selectedProject,
    setSelectedProject
}) => {
    const [projectOptions, setProjectOptions] = useState<Option[]>([]);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectService.getAll();
                const projects: ProjectWithContributors[] = response.data;

                const options = projects.map((project) => ({
                    label: project.name,
                    value: project.id
                }));
                setProjectOptions(options);
                setIsProjectsFetching(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsProjectsFetching(false);
            }
        };

        fetchProjects();
    }, []);

    if (isProjectsFetching) return null;

    return (
        <Filters>
            <Select
                value={selectedProject}
                onSelect={setSelectedProject}
                options={projectOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="Filter By Project"
                className="story-filter"
            />
        </Filters>
    );
};

export { StoryFilters };
