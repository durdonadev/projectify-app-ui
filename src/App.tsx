import React, {
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction
} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

type AppContextType = {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
    counter: 0,
    setCounter: () => {}
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [counter, setCounter] = useState(0);
    return (
        <AppContext.Provider value={{ counter, setCounter }}>
            {children}
        </AppContext.Provider>
    );
};

const App = () => {
    const { counter, setCounter } = useContext(AppContext);

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
