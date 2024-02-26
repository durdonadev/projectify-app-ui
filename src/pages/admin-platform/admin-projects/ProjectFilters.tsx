import styled from "styled-components";
import { Option, Select } from "../../../design-system";
import React from "react";
import { PageFilters } from "../../components/PageFilters";

type ProjectFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    sortedBy: string;
    setSortedBy: (option: Option) => void;
};

const Filters = styled(PageFilters)`
    .status-filter {
        margin-right: auto;
    }
`;

const statusOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "ACTIVE" },
    { label: "Onhold", value: "ONHOLD" },
    { label: "Archived", value: "ARCHIVED" },
    { label: "Completed", value: "COMPLETED" }
];

const sortOptions = [
    { label: "Deadline", value: "deadline" },
    { label: "Progress", value: "progress" }
];

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    selectedStatus,
    setSelectedStatus,
    sortedBy,
    setSortedBy
}) => {
    return (
        <Filters>
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="Filter By Status"
                className="status-filter"
            />
            <Select
                value={sortedBy}
                onSelect={setSortedBy}
                options={sortOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="Sort By"
            />
        </Filters>
    );
};

export { ProjectFilters };
