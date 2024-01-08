import { Link } from "react-router-dom";
import styled from "styled-components";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const App = () => {
    return (
        <Base>
            <h1>You are at Home</h1>
            <Link to="admin/sign-up">Admin Sign up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>
            <Link to="admin/platform/projects">Admin Projects</Link>
            <Link to="admin/platform/stories">Admin Stories</Link>
            <Link to="admin/platform/personal-tasks">Admin Personal Tasks</Link>
            <Link to="admin/platform/team-members">Admin Team-Members</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/login">Team Member Login</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">
                Team Member Admin Stories
            </Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Admin Personal Tasks
            </Link>
        </Base>
    );
};

export { App };
