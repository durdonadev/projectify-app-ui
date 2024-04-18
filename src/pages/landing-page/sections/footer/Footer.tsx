import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container, SectionSidePadding } from "../../components";

const FooterSection = styled.footer`
    padding: var(--space-20) var(--space-100);
    border-top: 1px solid var(--jaguar-200);

    ${SectionSidePadding}
`;

const FooterContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 50em) {
        flex-direction: column;
        gap: var(--space-12);
    }
`;

const CopyrightText = styled(Typography)`
    color: var(--jaguar-500);
`;

const LinksWrapper = styled.div``;

const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-48);
`;

const List = styled.li`
    cursor: pointer;
    list-style-type: none;
`;

const Link = styled.a`
    color: var(--primary-500);
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
    font-weight: 500;

    &:visited {
        color: var(--primary-500);
    }
`;

const Footer = () => {
    return (
        <FooterSection id="footer">
            <FooterContainer>
                <CopyrightText variant="paragraphSM">
                    ©Projectify 2024 - All Rights Reserved.
                </CopyrightText>
                <LinksWrapper>
                    <UnorderedList>
                        <List>
                            <Link>Careers</Link>
                        </List>
                        <List>
                            <Link>FAQ</Link>
                        </List>
                        <List>
                            <Link href="https://www.google.com/maps/dir/40.721471,-73.7644025/205+Allen+St,+New+York,+NY+10002/@40.7379299,-74.0472305,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2598474c10bcf:0xd62d514f22a03f04!2m2!1d-73.9890753!2d40.7227487?entry=ttu">
                                Sitemap
                            </Link>
                        </List>
                        <List>
                            <Link>Privacy Policy</Link>
                        </List>
                    </UnorderedList>
                </LinksWrapper>
            </FooterContainer>
        </FooterSection>
    );
};

export { Footer };
