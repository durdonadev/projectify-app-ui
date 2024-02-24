import styled from "styled-components";
import { DatePickerV1, Input, Option, Select } from "../../../design-system";
import React from "react";
import { PageFilters } from "../../components/PageFilters";

type ProjectFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
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
const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    selectedStatus,
    setSelectedStatus,
    searchText,
    setSearchText
}) => {
    return (
        <Filters>
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Search..."
                shape="rounded"
                size="md"
                className="search"
            />

            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="By Due Date"
                className="filter-by-due-date"
            />
        </Filters>
    );
};

export { ProjectFilters };
