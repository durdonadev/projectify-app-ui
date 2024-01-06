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
    TeamMemberLogin
} from "../pages";

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
        </>
    )
);
