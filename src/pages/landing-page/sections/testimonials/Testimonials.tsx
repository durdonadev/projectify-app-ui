import { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { testimonials } from "./data";
import bgImage from "../../../../assets/images/testimonials/bg-effect-testimonials.png";
import { Container, SectionBase } from "../../components";

const TestimonialsSection = styled(SectionBase)`
    background: url(${bgImage}) no-repeat top center;
    background-size: cover;

    padding-top: var(--space-120);
    padding-bottom: var(--space-100);

    @media screen and (max-width: 70em) {
        padding-top: var(--space-100);
        padding-bottom: var(--space-80);
    }

    @media screen and (max-width: 60em) {
        padding-top: var(--space-84);
        padding-bottom: var(--space-64);
    }

    @media screen and (max-width: 50em) {
        padding-top: var(--space-68);
        padding-bottom: var(--space-48);
    }
`;

const TestimonialsSectionContainer = styled(Container)`
    text-align: center;
    position: relative;
`;

const Header = styled(Typography)`
    margin-bottom: var(--space-50);
`;

const ContentWrapper = styled.div`
    height: 50rem;
    position: relative;
    overflow: hidden;
`;

const Article = styled.article`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }

    &.lastSlide {
        transform: translateX(-100%);
    }

    &.nextSlide {
        transform: translateX(100%);
    }
`;

const Avatar = styled.img`
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--space-20);
    box-shadow: 0 var(--space-6) var(--space-16) rgba(0, 0, 0, 0.2);
`;

const Name = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const Title = styled(Typography)`
    color: var(--jaguar-600);
    margin-bottom: var(--space-32);
`;

const StarsWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    display: flex;
    gap: var(--space-16);
    margin-bottom: var(--space-32);
`;

const Description = styled(Typography)`
    color: var(--jaguar-700);
    max-width: 70%;
    margin: 0 auto;
    margin-bottom: var(--space-50);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
`;

const PageCountWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    display: flex;
    gap: var(--space-24);
`;

const PageCount = styled.div<{ $active: boolean }>`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: var(--border-radius-8);
    background-color: ${(props) =>
        props.$active ? "var(--primary-500)" : "var(--jaguar-100)"};
`;

const PrevButton = styled.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border-radius: var(--border-radius-24);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;

    svg {
        fill: var(--primary-500);
    }

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media screen and (max-width: 60em) {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: var(--border-radius-18);
    }
`;

const PrevIcon = styled(Icon)`
    width: 3.6rem;
    height: 3.6rem;

    @media screen and (max-width: 60em) {
        width: 2.6rem;
        height: 2.6rem;
    }
`;

const NextButton = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border-radius: var(--border-radius-24);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;

    svg {
        fill: var(--primary-500);
    }

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media screen and (max-width: 60em) {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: var(--border-radius-18);
    }
`;

const NextIcon = styled(Icon)`
    transform: rotate(180deg);
    width: 3.6rem;
    height: 3.6rem;

    @media screen and (max-width: 60em) {
        width: 2.6rem;
        height: 2.6rem;
    }
`;

const Testimonials = () => {
    const [people] = useState(testimonials);
    const [index, setIndex] = useState(0);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        setActivePage(index);

        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <TestimonialsSection id="testimonials">
            <TestimonialsSectionContainer>
                <Header variant="h5" weight="bold">
                    Trust Our Clients
                </Header>
                <ContentWrapper>
                    {people.map((person, personIdx) => {
                        const { id, image, name, title, rating, description } =
                            person;
                        let position = "nextSlide";
                        if (personIdx === index) {
                            position = "activeSlide";
                        }
                        if (
                            personIdx === index - 1 ||
                            (index === 0 && personIdx === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <Article className={position} key={id}>
                                <Avatar src={image} alt={name} />
                                <Name variant="h6" weight="bold">
                                    {name}
                                </Name>
                                <Title variant="subtitleLG" weight="medium">
                                    {title}
                                </Title>
                                <StarsWrapper>
                                    {rating.map((_, idx) => {
                                        return (
                                            <Icon key={idx} iconName="star" />
                                        );
                                    })}
                                </StarsWrapper>
                                <Description
                                    variant="paragraphMD"
                                    weight="medium"
                                >
                                    {description}
                                </Description>
                                <PageCountWrapper>
                                    {people.map((_, idx) => (
                                        <PageCount
                                            key={idx}
                                            $active={idx === activePage}
                                            onClick={() => setIndex(idx)}
                                        />
                                    ))}
                                </PageCountWrapper>
                            </Article>
                        );
                    })}
                    <PrevButton onClick={() => setIndex(index - 1)}>
                        <PrevIcon iconName="arrow-left" />
                    </PrevButton>
                    <NextButton onClick={() => setIndex(index + 1)}>
                        <NextIcon iconName="arrow-left" />
                    </NextButton>
                </ContentWrapper>
            </TestimonialsSectionContainer>
        </TestimonialsSection>
    );
};

export default Testimonials;
