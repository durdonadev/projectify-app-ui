import { useEffect, useState } from "react";
import { NoDataPlaceholder, Page, PageContent } from "../../components";
import { CreateTeamMemberModal } from "./CreateTeamMemberModal";
import noTeamMember from "../../../assets/illustrations/no-member.svg";
import { useStore } from "../../../hooks";
import { teamMemberService } from "../../../api";
import { Actions, AdminPopulateTeamMembersAction } from "../../../store";
import toast from "react-hot-toast";
import { PageHeader } from "../../components";
import { TeamMemberFilters } from "./TeamMemberFilters";
import { TeamMembersTable } from "./TeamMembersTable";
import { Option } from "../../../design-system";
import { TeamMemberStatus } from "../../../types";

const AdminTeamMembersPage = () => {
    const [showCreateTeamMemberModal, setShowCreateTeamMemberModal] =
        useState(false);
    const [isTeamMembersFetching, setIsTeamMembersFetching] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const {
        state: { teamMembers },
        dispatch
    } = useStore();

    useEffect(() => {
        teamMemberService
            .getAll()
            .then((data) => {
                const action: AdminPopulateTeamMembersAction = {
                    type: Actions.ADMIN_POPULATE_TEAM_MEMBERS,
                    payload: data.data
                };
                dispatch(action);
                setIsTeamMembersFetching(false);
            })
            .catch((e) => {
                const err = e as Error;
                setIsTeamMembersFetching(false);
                toast.error(err.message);
            });
    }, []);

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as TeamMemberStatus);
    };

    if (isTeamMembersFetching) return null;

    const teamMembersArr = Object.values(teamMembers);
    const filteredTeamMembers = teamMembersArr.filter(
        (teamMember) =>
            teamMember.status === statusFilter ||
            statusFilter === "all" ||
            statusFilter === ""
    );

    return (
        <Page>
            {!teamMembersArr.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTeamMember}
                    text="You don't have any team members yet!"
                    buttonText="Add a Team Member"
                    buttonAction={() => setShowCreateTeamMemberModal(true)}
                ></NoDataPlaceholder>
            ) : (
                <PageContent>
                    <PageHeader
                        pageTitle="Team Members"
                        actionButtonText="Create A Member"
                        actionButtonOnClick={() =>
                            setShowCreateTeamMemberModal(true)
                        }
                    />
                    <TeamMemberFilters
                        setSelectedStatus={handleSetStatusFilter}
                        selectedStatus={statusFilter}
                    />
                    <TeamMembersTable data={filteredTeamMembers} />
                </PageContent>
            )}
            <CreateTeamMemberModal
                show={showCreateTeamMemberModal}
                closeModal={() => setShowCreateTeamMemberModal(false)}
            />
        </Page>
    );
};

export { AdminTeamMembersPage };
