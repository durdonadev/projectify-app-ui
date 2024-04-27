import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { FeaturesCard } from "./FeaturesCard";
import { features } from "./FeaturesCard/data";
import { Container, SectionBase } from "../../components";
import bgImage from "../../../../assets/images/features/bg-effect-features.png";

const FeaturesSectionBase = styled(SectionBase)`
    background: url(${bgImage}) no-repeat bottom center;
    background-size: cover;

    padding-top: var(--space-100);
    padding-bottom: var(--space-200);

    @media screen and (max-width: 70em) {
        padding-top: var(--space-80);
        padding-bottom: var(--space-160);
    }

    @media screen and (max-width: 60em) {
        padding-top: var(--space-64);
        padding-bottom: var(--space-128);
    }

    @media screen and (max-width: 50em) {
        padding-top: var(--space-48);
        padding-bottom: var(--space-96);
    }
`;

const FeaturesContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(Typography)`
    text-align: center;
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-50);
    text-align: center;
`;

const FeaturesCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    @media screen and (max-width: 52em) {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-20);
    }

    @media screen and (max-width: 40em) {
        gap: var(--space-14);
    }

    @media screen and (max-width: 25em) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledButton = styled(Button)`
    margin: 0 auto;
    max-width: 27rem;
`;

const Features = () => {
    return (
        <FeaturesSectionBase id="about">
            <FeaturesContainer>
                <Title variant="h5" weight="bold">
                    Get the best for your team
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Our solution provides simple yet effective project
                    management
                </Description>

                <FeaturesCardsWrapper>
                    {features.map((feature, idx) => (
                        <FeaturesCard
                            key={idx}
                            title={feature.title}
                            description={feature.description}
                            iconName={feature.iconName}
                            cardBackgroundColor={feature.cardBackgroundColor}
                            iconWrapperBackgroundColor={
                                feature.iconWrapperBackgroundColor
                            }
                            iconWrapperBorderColor={
                                feature.iconWrapperBorderColor
                            }
                        />
                    ))}
                </FeaturesCardsWrapper>
                <StyledButton
                    size="md"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={() => {}}
                >
                    Try a Demo
                </StyledButton>
            </FeaturesContainer>
        </FeaturesSectionBase>
    );
};

export { Features };
