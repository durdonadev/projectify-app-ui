import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Badge } from "./design-system";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 100px;
`;

const App = () => {
    return (
        <Base>
            <h1>Welcome </h1>

            {/* <Link to="admin/sign-up">Admin Sign up</Link>
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
            <Link to="team-member/platform">Team Member Platform</Link> */}

            <Badge color="violet">INACTIVE</Badge>
            <Badge shape="circle" color="green" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="violet" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="orange" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="green" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="blue" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="red" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="purple" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="grey" variant="lightBg">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="violet" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="orange" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="green" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="blue" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="red" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="purple" variant="stroke">
                INACTIVE
            </Badge>
            <Badge shape="rounded" color="grey" variant="stroke">
                INACTIVE
            </Badge>
        </Base>
    );
};

export { App };
