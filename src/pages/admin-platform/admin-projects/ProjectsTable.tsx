import { useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import {
    Badge,
    BadgeColors,
    Menu,
    MenuOption,
    Typography,
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow,
    LinearProgress
} from "../../../design-system";
import { AdminProjectActions, ProjectWithContributors } from "../../../types";
import { formatAsMMMddYYYY, formatDeadline } from "../../../utils";
import { Scrollable } from "../../components";

type ProjectsTableProps = {
    data: ProjectWithContributors[];
};

const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

const ProjectDescription = styled(Typography)`
    color: var(--jaguar-500);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const AboutProject = styled.div`
    width: 90%;
`;

const ProgressWrapper = styled.div`
    width: 80%;
`;

const Deadline = styled(Typography)`
    &.green {
        color: var(--green-600);
    }
    &.red {
        color: var(--red-orange-600);
    }
`;

const renderDeadline = (isoDate: string) => {
    const formattedDeadline = formatDeadline(isoDate);
    let className = "";
    if (formattedDeadline.includes("left")) {
        className = "red";
    } else {
        className = "green";
    }

    return (
        <Deadline variant="paragraphSM" weight="medium" className={className}>
            {formattedDeadline}
        </Deadline>
    );
};

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

const columns = ["20%", "10%", "20%", "15%", "15%", "10%", "10%"];
const statusToBadgeColors = {
    ACTIVE: "violet",
    ONHOLD: "orange",
    ARCHIVED: "gray",
    COMPLETED: "green"
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
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
                        <TableHeadCell>About</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Progress</TableHeadCell>
                        <TableHeadCell>Start Date</TableHeadCell>
                        <TableHeadCell>Deadline</TableHeadCell>
                        <TableHeadCell>Contributors</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((project) => {
                        return (
                            <TableRow key={project.id} columns={columns}>
                                <TableBodyCell>
                                    <AboutProject>
                                        <Typography
                                            variant="paragraphSM"
                                            weight="medium"
                                        >
                                            {project.name}
                                        </Typography>
                                        <ProjectDescription
                                            variant="subtitleSM"
                                            weight="medium"
                                        >
                                            {project.description}
                                        </ProjectDescription>
                                    </AboutProject>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge
                                        color={
                                            statusToBadgeColors[
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
                                    <ProgressWrapper>
                                        <LinearProgress
                                            value={75}
                                            color="blue"
                                            shape="rounded"
                                        />
                                    </ProgressWrapper>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {formatAsMMMddYYYY(project.startDate)}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {renderDeadline(project.endDate)}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.contributers?.length || 0}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Menu
                                        options={allowedActions[project.status]}
                                        onSelect={(value) => console.log(value)}
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
