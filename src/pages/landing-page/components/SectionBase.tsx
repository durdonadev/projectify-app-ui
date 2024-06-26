import styled, { css } from "styled-components";

export const SectionSidePadding = css`
    @media screen and (max-width: 70em) {
        padding-right: var(--space-50);
        padding-left: var(--space-50);
    }

    @media screen and (max-width: 60em) {
        padding-right: var(--space-24);
        padding-left: var(--space-24);
    }

    @media screen and (max-width: 30em) {
        padding-right: var(--space-18);
        padding-left: var(--space-18);
    }
`;

export const SectionBase = styled.section`
    padding: var(--space-100);

    @media screen and (max-width: 70em) {
        padding-top: var(--space-80);
        padding-bottom: var(--space-80);
    }

    @media screen and (max-width: 60em) {
        padding-top: var(--space-64);
        padding-bottom: var(--space-64);
    }

    @media screen and (max-width: 50em) {
        padding-top: var(--space-48);
        padding-bottom: var(--space-48);
    }

    ${SectionSidePadding}
`;
