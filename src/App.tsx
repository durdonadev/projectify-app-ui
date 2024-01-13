import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const useCounter = (
    startAt: number,
    incrementBy: number
): [number, () => void] => {
    const [counter, setCounter] = useState(startAt);

    const increment = () => {
        setCounter((prevCounter) => prevCounter + incrementBy);
    };

    return [counter, increment];
};

const App = () => {
    const [counter, setCounter] = useCounter(100, 100);

    return (
        <Base>
            <button onClick={setCounter}>Count</button>
            <h1>{counter}</h1>
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

export { App, useCounter };
