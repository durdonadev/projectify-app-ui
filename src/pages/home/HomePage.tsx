import React from "react";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import styled from "styled-components";
import { FeaturesCard } from "../components/FeaturesCard";

const Base = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    font-size: 0;
    background-color: #a3c6e4;
`;

const HomePage = () => {
    return (
        <Base>
            <h1>Welcome to the Home Page</h1>
            <TopNavigation />
            <FeaturesCard />
        </Base>
    );
};

export { HomePage };
