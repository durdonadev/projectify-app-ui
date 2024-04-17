import styled from "styled-components";
import { Container, SectionBase } from "../../components";
import google from "../../../../assets/images/brands/google.svg";
import airbnb from "../../../../assets/images/brands/airbnb.svg";
import creative from "../../../../assets/images/brands/creative.svg";
import shopify from "../../../../assets/images/brands/shopify.svg";
import amazon from "../../../../assets/images/brands/amazon.svg";

const companies = [google, airbnb, creative, shopify, amazon];

const BrandsSectionBase = styled(SectionBase)`
    padding-top: var(--space-35);
    padding-bottom: var(--space-25);
`;

const BrandsSectionContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-30);
`;

const ImageWrapper = styled.div`
    max-width: 11.6rem;
    height: max-content;
`;

const CompanyLogo = styled.img`
    width: 100%;
    height: auto;
`;

const Brands = () => {
    return (
        <BrandsSectionBase id="brands">
            <BrandsSectionContainer>
                {companies.map((company, idx) => (
                    <ImageWrapper>
                        <CompanyLogo key={idx} src={company} />
                    </ImageWrapper>
                ))}
            </BrandsSectionContainer>
        </BrandsSectionBase>
    );
};

export default Brands;
