import styled from "styled-components";
import hero from "../../../../assets/images/hero/hero.svg";
import date from "../../../../assets/images/hero/date.svg";
import status from "../../../../assets/images/hero/status-badge.svg";
import members from "../../../../assets/images/hero/members.svg";
import google from "../../../../assets/images/hero/google.svg";
import { Container, SectionBase } from "../../components";
import { Typography, Button } from "../../../../design-system";

const HeroSectionBase = styled(SectionBase)`
    padding-bottom: 0;
`;

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroHeading = styled(Typography)`
    color: var(--jaguar-900);

    @media screen and (max-width: 70em) {
        font-size: var(--font-size-56);
        line-height: var(--line-height-64);
    }

    @media screen and (max-width: 60em) {
        font-size: var(--font-size-48);
        line-height: var(--line-height-56);
    }

    @media screen and (max-width: 50em) {
        font-size: var(--font-size-40);
        line-height: var(--line-height-48);
    }

    @media screen and (max-width: 40em) {
        font-size: var(--font-size-32);
        line-height: var(--line-height-40);
    }

    @media screen and (max-width: 35em) {
        font-size: var(--font-size-28);
        line-height: var(--line-height-40);
    }
`;

const HeroDescription = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
    max-width: calc(var(--font-size-64) * 12);

    @media screen and (max-width: 70em) {
        max-width: calc(var(--font-size-56) * 12);
    }

    @media screen and (max-width: 60em) {
        max-width: calc(var(--font-size-48) * 12);
    }

    @media screen and (max-width: 35em) {
        font-size: var(--font-size-14);
        line-height: var(--line-height-20);
    }
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
        <HeroSectionBase>
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
        </HeroSectionBase>
    );
};

export { Hero };
