import styled from "styled-components";
import { Input, Option, Select } from "../../../design-system";
import React from "react";
import { PageFilters } from "../../components/PageFilters";

type TeamMemberFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
};

const Filters = styled(PageFilters)`
    .status-filter {
        margin-right: auto;
    }
`;
const statusOptions = [
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
    { label: "Deactivated", value: "DEACTIVATED" },
    { label: "All", value: "all" }
];
const TeamMemberFilters: React.FC<TeamMemberFiltersProps> = ({
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
                className="status-filter"
            />
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Search..."
                shape="rounded"
                size="md"
            />
        </Filters>
    );
};

export { TeamMemberFilters };
