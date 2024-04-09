import styled from "styled-components";
import hero from "../../../../assets/images/hero/hero.svg";
import date from "../../../../assets/images/hero/date.svg";
import status from "../../../../assets/images/hero/status-badge.svg";
import members from "../../../../assets/images/hero/members.svg";
import google from "../../../../assets/images/hero/google.svg";
import { Container, SectionBase } from "../../components";
import { Typography, Button } from "../../../../design-system";

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroHeading = styled(Typography)`
    color: var(--jaguar-900);
`;

const HeroDescription = styled(Typography)`
    width: 60%;
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
`;

const StyledButton = styled(Button)`
    margin: 0 auto;
    max-width: 17rem;
    margin-bottom: var(--space-40);
`;

const HeroImgWrapper = styled.div`
    position: relative;
`;

const HeroImg = styled.img`
    width: 100%;
    height: auto;
`;
const DateBadge = styled.img`
    position: absolute;
    top: 18%;
    left: -3%;
    width: 11%;
`;
const MembersImage = styled.img`
    position: absolute;
    bottom: 12%;
    left: -12%;
    width: 25%;
    height: auto;
`;

const StatusBadge = styled.img`
    position: absolute;
    top: 40%;
    right: -4%;
    width: 12.5%;
`;
const GoogleImage = styled.img`
    position: absolute;
    bottom: 2%;
    right: -8%;
    width: 27%;
    max-width: 100%;
    height: auto;
`;

const Hero = () => {
    return (
        <SectionBase>
            <HeroContainer>
                <HeroHeading variant="h1" align="center">
                    Unleash the Power of Projectify
                </HeroHeading>
                <HeroDescription variant="paragraphMD" align="center">
                    Projectify is your all-in-one solution, crafted to simplify
                    your project management journey and supercharge your
                    success.
                </HeroDescription>

                <StyledButton
                    size="md"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={() => {}}
                >
                    Try a Demo
                </StyledButton>

                <HeroImgWrapper>
                    <HeroImg src={hero} alt="Projectify Kanban Board" />
                    <DateBadge src={date} alt="" />
                    <MembersImage src={members} alt="" />
                    <StatusBadge src={status} alt="" />
                    <GoogleImage src={google} alt="" />
                </HeroImgWrapper>
            </HeroContainer>
        </SectionBase>
    );
};

export { Hero };
