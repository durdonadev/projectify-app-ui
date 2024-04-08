import styled from "styled-components";

export const HeroHeaderBase = styled.header`
    background-color: var(--color-bg);
    padding: 0 var(--space-96);

    @media screen and (max-width: 70em) {
        padding: var(--space-48) var(--space-80) 0;
    }

    @media screen and (max-width: 60em) {
        padding: var(--space-40) var(--space-64) 0;
    }

    @media screen and (max-width: 60em) {
        padding: var(--space-36) var(--space-48) 0;
    }

    @media screen and (max-width: 30em) {
        padding: var(--space-30) var(--space-32) 0;
    }
`;
