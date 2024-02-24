import { useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import {
    Badge,
    BadgeColors,
    Menu,
    MenuOption,
    Typography
} from "../../../design-system";
import {
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow
} from "../../../design-system/Table";
import { AdminProjectActions, Project } from "../../../types";
import { toDateObj } from "../../../utils";
import { Scrollable } from "../../components";

type ProjectsTableProps = {
    data: Project[];
};

const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

const options: MenuOption[] = [
    {
        label: "Complete",
        iconName: "check-in-circle",
        value: "complete",
        color: "primary"
    },
    {
        label: "Archive",
        iconName: "check-in-circle",
        value: "archive",
        color: "primary"
    },
    { label: "Edit", iconName: "edit", value: "edit", color: "primary" },
    { label: "Delete", iconName: "delete", value: "delete", color: "danger" }
];

const allowedActions = {
    ACTIVE: [options[0], options[4]],
    ONHOLD: [options[0], options[3]],
    ARCHIVED: [options[0], options[2]],
    COMPLETED: [options[0], options[1]]
};

const columns = ["30%", "15%", "20%", "30%", "5%"];
const mapsStatusToBadgeColors = {
    ACTIVE: "violet",
    ONHOLD: "orange",
    ARCHIVED: "gray",
    COMPLETED: "green"
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");
    const [showCompleteProjectModal, setShowECompleteProjectModal] =
        useState(false);
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [showArchiveProjectModal, setShowArchiveProjectModal] =
        useState(false);
    const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);
    const [changeStatus, setChangeStatus] = useState();
    const [showChangeProjectStatusModal, setShowChangeProjectStatusModal] =
        useState(false);

    const onSelectActionCellMenu = (
        projectId: string,
        action: AdminProjectActions
    ) => {
        setSelectedProjectId(projectId);
        if (action === AdminProjectActions.edit) {
            setShowEditProjectModal(true);
        } else if (action === AdminProjectActions.delete) {
            setShowDeleteProjectModal(true);
        } else if (
            action === AdminProjectActions.complete ||
            action === AdminProjectActions.archive
        ) {
            // setChangeStatus(action);
            setShowChangeProjectStatusModal(true);
        }
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow columns={columns}>
                        <TableHeadCell>
                            Project name and description
                        </TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Due date</TableHeadCell>
                        <TableHeadCell>Team members</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((project) => {
                        return (
                            <TableRow key={project.id} columns={columns}>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.name}
                                    </Typography>
                                    {/* <Typography
                                        variant="subtitleSM"
                                        weight="medium"
                                    >
                                        {project.description}
                                    </Typography> */}
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge
                                        color={
                                            mapsStatusToBadgeColors[
                                                project.status
                                            ] as BadgeColors
                                        }
                                        label={project.status}
                                        variant="outlined"
                                        shape="rounded"
                                        status
                                    />
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {format(
                                            toDateObj(project.endDate),
                                            "MMM d, yyyy"
                                        )}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        Team Members
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Menu
                                        options={allowedActions[project.status]}
                                        onSelect={(value) =>
                                            onSelectActionCellMenu(
                                                project.id,
                                                value as AdminProjectActions
                                            )
                                        }
                                    />
                                </TableBodyCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {/* <EditProjectModal
                show={showEditProjectModal}
                closeModal={() => setShowEditProjectModal(false)}
                projectId={selectedProjectId}
            />
            <DeleteProjectModal
                show={showDeleteProjectModal}
                projectId={selectedProjectId}
                closeModal={() => setShowDeleteProjectModal(false)}
            />
            <ChangeProjectStatusModal
                show={showChangeProjectStatusModal}
                projectId={selectedProjectId}
                closeModal={() => setShowChangeProjectStatusModal(false)}
                changeStatus={changeStatus!}
            /> */}
        </TableContainer>
    );
};

export { ProjectsTable };
