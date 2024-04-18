import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";
import { Container, SectionSidePadding } from "../../components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import burgerIcon from "../../../../assets/images/burger-icon.svg";
import { MobileNavigation } from "./MobileNavigation";

const links = [
    { text: "About", link: "#about" },
    { text: "Testimonials", link: "#testimonials" },
    { text: "Contact", link: "#contact" }
];

const Base = styled.nav`
    display: flex;
    align-items: center;
    height: 7.2rem;
    padding: 0 var(--space-100);

    ${SectionSidePadding}
`;

const TopNavigationContainer = styled(Container)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLinks = styled.div`
    display: flex;
    gap: var(--space-40);

    @media screen and (max-width: 50em) {
        & {
            display: none;
        }
    }
`;

const MobileActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);

    @media screen and (max-width: 50em) {
        & {
            display: none;
        }
    }
`;

const LogoLink = styled(Link)``;

const MenuButton = styled(Button)`
    display: none;
    padding: 0;
    background-color: transparent;

    @media screen and (max-width: 50em) {
        & {
            display: flex;
        }
    }
    img {
        height: 2.4rem;
        width: 2.4rem;
    }
`;

const MobileButton = styled(Button)`
    margin-right: auto;
    width: 11rem;
`;

const TopNavigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Base>
            <TopNavigationContainer>
                <LogoLink to="/">
                    <Logo size="sm" layout="horizontal" />
                </LogoLink>
                <NavigationLinks>
                    {links.map((link, index) => (
                        <NavigationLink
                            key={index}
                            linkText={link.text}
                            linkTo={link.link}
                        />
                    ))}
                </NavigationLinks>
                <Buttons>
                    <Button
                        variant="outlined"
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {}}
                    >
                        Sign Up
                    </Button>
                    <Button
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {}}
                    >
                        Sign In
                    </Button>
                </Buttons>
                <MenuButton
                    variant="contained"
                    size="sm"
                    onClick={() => setShowMobileMenu(true)}
                >
                    <img src={burgerIcon} alt="" />
                </MenuButton>
            </TopNavigationContainer>
            <MobileNavigation
                show={showMobileMenu}
                onClose={() => setShowMobileMenu(false)}
            >
                <MobileActions>
                    {links.map((link, index) => (
                        <NavigationLink
                            key={index}
                            linkText={link.text}
                            linkTo={link.link}
                        />
                    ))}

                    <MobileButton
                        variant="outlined"
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {}}
                    >
                        Sign Up
                    </MobileButton>
                    <MobileButton
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {}}
                    >
                        Sign In
                    </MobileButton>
                </MobileActions>
            </MobileNavigation>
        </Base>
    );
};

export { TopNavigation };
