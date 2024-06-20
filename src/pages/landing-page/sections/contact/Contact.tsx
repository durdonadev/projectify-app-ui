import styled from "styled-components";
import { Icon, Logo, Typography } from "../../../../design-system";
import { Container, SectionBase } from "../../components";
import { useEffect } from "react";

const ContactSection = styled(SectionBase)`
    background-color: var(--white);
`;

const ContactSectionContainer = styled(Container)`
    display: grid;
    gap: var(--space-30);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "logo contact map";

    @media screen and (max-width: 55em) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "logo logo"
            "contact map";
    }

    @media screen and (max-width: 30em) {
        display: flex;
        flex-direction: column;
        gap: var(--space-30);
    }
`;

const LogoWrapper = styled.div`
    grid-area: logo;
    grid-row: 1;
    grid-column: 1 / 2;

    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 55em) {
        grid-row: 1;
        grid-column: 1 / 3;
        gap: var(--space-30);
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 30em) {
        display: flex;
        flex-direction: column;
        gap: var(--space-10);
    }
`;

const Description = styled(Typography)`
    width: 23ch;
    white-space: wrap;

    @media screen and (max-width: 55em) {
        width: 100%;
    }
`;

const ContactInfoWrapper = styled.div`
    grid-area: contact;
    grid-row: 1;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    @media screen and (max-width: 55em) {
        grid-row: 2;
        grid-column: 1 / 2;
        gap: var(--space-20);
    }

    @media screen and (max-width: 30em) {
        grid-row: 3;
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
`;

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--space-16);
    line-height: var(--space-20);

    @media screen and (max-width: 55em) {
        width: 100%;
    }
`;

const SocialMediaWrapper = styled.div`
    :not(:last-child) {
        margin-right: var(--space-20);
    }
`;

const SocialIcon = styled(Icon)`
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
`;

const MapWrapper = styled.iframe`
    grid-area: map;
    grid-column: 3 / 4;
    grid-row: 1;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-32);
    border: none;

    @media screen and (max-width: 55em) {
        grid-row: 2;
        grid-column: 2 / 3;
    }

    @media screen and (max-width: 30em) {
        height: 25rem;
    }
`;

const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactSectionContainer>
                <LogoWrapper>
                    <Link href="#home">
                        <Logo size="sm" layout="horizontal" />
                    </Link>
                    <Description variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </Description>
                </LogoWrapper>

                <ContactInfoWrapper>
                    <ContactWrapper>
                        <Icon iconName="phone" width="2.4rem" height="2.4rem" />
                        <Link href="tel:++1 (555) 555-11234">
                            +1 (555) 555-11234
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon
                            iconName="email-purple"
                            width="2.4rem"
                            height="2.4rem"
                        />
                        <Link href="mailto:info@projectify.com">
                            info@projectify.com
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon
                            iconName="location"
                            width="2.4rem"
                            height="2.4rem"
                        />
                        <Link
                            href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                            target="_blank"
                        >
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </ContactWrapper>
                    <SocialMediaWrapper>
                        <Link href="https://www.facebook.com/" target="_blank">
                            <SocialIcon iconName="facebook" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank">
                            <SocialIcon iconName="twitter" />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <SocialIcon iconName="instagram" />
                        </Link>
                    </SocialMediaWrapper>
                </ContactInfoWrapper>

                <MapWrapper src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7848423222636!2d-73.99165022450106!3d40.722752736958086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598474c10bcf%3A0xd62d514f22a03f04!2s205%20Allen%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sru!2sus!4v1718859025091!5m2!1sru!2sus"></MapWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export { Contact };
