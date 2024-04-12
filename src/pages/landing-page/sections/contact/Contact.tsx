import styled from "styled-components";
import { Icon, Logo, Typography } from "../../../../design-system";
import { Container, SectionBase } from "../../components";
import { useEffect } from "react";

const ContactSection = styled(SectionBase)``;

const ContactSectionContainer = styled(Container)`
    display: flex;
    gap: var(--space-30);
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
    width: calc((100% - 6rem) / 3);
`;

const Description = styled(Typography)`
    width: 70%;
`;

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
    width: calc((100% - 6rem) / 3);
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
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const SocialIcon = styled(Icon)`
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
`;

const MapWrapper = styled.div`
    width: calc((100% - 6rem) / 3);
    height: auto;
    border-radius: var(--border-radius-32);
    border: 0;
`;

const Contact = () => {
    useEffect(() => {
        const center = { lat: 40.722894994446584, lng: -73.98909137283559 };
        const zoomLevel = 8;

        const mapContainer = document.getElementById("map");

        if (mapContainer) {
            const map = new window.google.maps.Map(mapContainer, {
                center: center,
                zoom: zoomLevel
            });

            new window.google.maps.Marker({
                position: center,
                map: map
            });
        } else {
            console.error("Map container element not found.");
        }
    }, []);

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
                        <Icon iconName="phone" />
                        <Link href="tel:++1 (555) 555-11234">
                            +1 (555) 555-11234
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon iconName="email-purple" />
                        <Link href="mailto:info@projectify.com">
                            info@projectify.com
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon iconName="location" />
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

                <MapWrapper id="map"></MapWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export { Contact };
