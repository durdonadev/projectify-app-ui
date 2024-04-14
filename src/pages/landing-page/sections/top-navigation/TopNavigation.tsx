import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";
import { Container, SectionSidePadding } from "../../components";

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
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const TopNavigation = () => {
    return (
        <Base>
            <TopNavigationContainer>
                <Logo size="sm" layout="horizontal" />
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
            </TopNavigationContainer>
        </Base>
    );
};

export { TopNavigation };
