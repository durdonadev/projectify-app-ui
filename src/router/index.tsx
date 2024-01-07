import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminForgotPassword,
    AdminLogin,
    AdminResetPassword,
    AdminSignup,
    TeamMemberCreatePassword,
    TeamMemberLogin,
    AdminPlatform,
    AdminProjects,
    AdminStories,
    AdminPersonalTasks,
    AdminTeamMembers
} from "../pages";
import { SideBar } from "../design-system";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<AdminSignup />} />
            <Route path="/admin/sign-in" element={<AdminLogin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route path="/team-member/login" element={<TeamMemberLogin />} />

            <Route path="/platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<AdminStories />} />
                <Route path="personal-tasks" element={<AdminPersonalTasks />} />
                <Route path="team-members" element={<AdminTeamMembers />} />
            </Route>
        </>
    )
);
