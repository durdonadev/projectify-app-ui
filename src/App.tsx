import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>You are at Home</h1>
            <Link to="admin/sign-up">Sign up</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forgot-password">Forgot Password</Link>
            <Link to="admin/reset-password">Update Password</Link>

            <Link to="team-member/create-password">Create Password</Link>
            <Link to="team-member/login">Login</Link>
        </>
    );
};

export { App };
