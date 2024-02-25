import styled from "styled-components";
import { Input, Option, Select } from "../../../design-system";
import React from "react";
import { PageFilters } from "../../components/PageFilters";

type ProjectFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    sortedBy: string;
    setSortedBy: (option: Option) => void;
};

const Filters = styled(PageFilters)`
    .search {
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
                className="filter-by-status"
            />
            <Select
                value={sortedBy}
                onSelect={setSortedBy}
                options={sortOptions}
                shape="rounded"
                size="md"
                className="filter-by-due-date"
            />
        </Filters>
    );
};

export { ProjectFilters };
