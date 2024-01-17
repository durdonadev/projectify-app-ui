import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "./hooks";
import styled from "styled-components";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const App = () => {
    const { counter, setCounter } = useStore();
    return (
        <Base>
            <h1>Welcome </h1>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <Link to="admin/sign-up">Admin Sign up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/sign-in">Team Member Sign in</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>
            <Link to="team-member/platform">Team Member Platform</Link>
        </Base>
    );
};

export { App };
