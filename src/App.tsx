import { Link } from "react-router-dom";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { OptionValue, Select } from "./design-system";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 100px;
`;

const App = () => {
    const [value, setValue] = useState<OptionValue>("");
    return (
        <Base>
            <h1>Welcome </h1>

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
            <Select
                options={[
                    { label: "Option1", value: "option1" },
                    { label: "Option2", value: "option2" },
                    { label: "Option3", value: "option3" },
                    { label: "Option4", value: "option4" },
                    { label: "Option5", value: "option5" },
                    { label: "Option6", value: "option6" }
                ]}
                headerPlaceholder="Select Option"
                onSelect={(option) => setValue(option.value)}
                size="md"
                shape="circle"
                value={value}
            />
        </Base>
    );
};

export { App };
