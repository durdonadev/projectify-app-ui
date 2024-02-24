import { useEffect, useState } from "react";

import { NoDataPlaceholder, PageHeader } from "../../components";
import noProject from "../../../assets/illustrations/no-project.svg";
import { CreateProjectModal } from "./CreateProjectModal";
import { useStore } from "../../../hooks";
import { projectService } from "../../../api";
import { Actions, AdminPopulateProjectsAction } from "../../../store";
import toast from "react-hot-toast";
import { ProjectStatus } from "../../../types";
import { Option } from "../../../design-system";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectsTable } from "./ProjectsTable";

const AdminProjectsPage = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const [searchText, setSearchText] = useState("");

    const {
        state: { projects },
        dispatch
    } = useStore();

    useEffect(() => {
        projectService
            .getAll()
            .then((data) => {
                const action: AdminPopulateProjectsAction = {
                    type: Actions.ADMIN_POPULATE_PROJECTS,
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

    if (isProjectsFetching) return null;

    const projectsArr = Object.values(projects);

    const filterProjects = () => {
        let filteredProjects = projectsArr;
        if (statusFilter && statusFilter !== "all") {
            filteredProjects = filteredProjects.filter(
                (project) => project.status === statusFilter
            );
        }
        if (searchText) {
            filteredProjects = filteredProjects.filter(
                (project) =>
                    project.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            );
        }

        return filteredProjects;
    };

    const filteredProjects = filterProjects();

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
                        setSelectedStatus={handleSetStatusFilter}
                        selectedStatus={statusFilter}
                        searchText={searchText}
                        setSearchText={setSearchText}
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
