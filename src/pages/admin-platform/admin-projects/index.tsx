import { useEffect, useState } from "react";

import { NoDataPlaceholder, PageHeader } from "../../components";
import noProject from "../../../assets/illustrations/no-project.svg";
import { CreateProjectModal } from "./CreateProjectModal";
import { useStore } from "../../../hooks";
import { projectService } from "../../../api";
import { Actions, PopulateProjectsAction } from "../../../store";
import toast from "react-hot-toast";
import { ProjectStatus } from "../../../types";
import { Option } from "../../../design-system";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectsTable } from "./ProjectsTable";

const AdminProjectsPage = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);
    const [statusFilter, setStatusFilter] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [sortedBy, setSortedBy] = useState("");

    const {
        state: { projects },
        dispatch
    } = useStore();

    useEffect(() => {
        projectService
            .getAll()
            .then((data) => {
                const action: PopulateProjectsAction = {
                    type: Actions.POPULATE_PROJECTS,
                    payload: data.data
                };
                dispatch(action);
                setIsProjectsFetching(false);
            })
            .catch((e) => {
                const err = e as Error;
                setIsProjectsFetching(false);
                toast.error(err.message);
            });
    }, []);

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as ProjectStatus);
    };

    const handleSetSortBy = (sortedBy: Option) => {
        setSortedBy(sortedBy.value as string);
    };

    if (isProjectsFetching) return null;

    const projectsArr = Object.values(projects);

    const filterProjects = (value: string) => {
        if (value === "all") return projectsArr;
        return projectsArr.filter((project) => project.status === value);
    };
    const filteredProjects = filterProjects(statusFilter);

    return (
        <>
            {!projectsArr.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don't have any projects yet!"
                    buttonText="Add a Project"
                    buttonAction={() => setShowCreateProjectModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Projects"
                        actionButtonText="Create A Project"
                        actionButtonOnClick={() =>
                            setShowCreateProjectModal(true)
                        }
                    />
                    <ProjectFilters
                        sortedBy={sortedBy}
                        setSortedBy={handleSetSortBy}
                        selectedStatus={statusFilter}
                        setSelectedStatus={handleSetStatusFilter}
                    />
                    <ProjectsTable data={filteredProjects} />
                </>
            )}
            <CreateProjectModal
                show={showCreateProjectModal}
                closeModal={() => setShowCreateProjectModal(false)}
            />
        </>
    );
};

export { AdminProjectsPage };
