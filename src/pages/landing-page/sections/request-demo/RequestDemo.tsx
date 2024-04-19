import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import paperPlane from "../../../../assets/images/request-demo/paper-plane.svg";
import userIcon from "../../../../assets/images/request-demo/user.svg";
import emailIcon from "../../../../assets/images/request-demo/email.svg";
import companyIcon from "../../../../assets/images/request-demo/building.svg";
import { Container, SectionBase } from "../../components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
}

const RequestDemoSection = styled(SectionBase)`
    background: linear-gradient(to right, #6826f7, #bb9cfb);
`;

const RequestDemoContainer = styled(Container)`
    text-align: center;
`;

const Header = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-50);
`;

const ContentWrapper = styled.div`
    max-width: 97.4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-34);

    @media screen and (max-width: 1020px) {
        width: 100%;
    }

    @media screen and (max-width: 40em) {
        display: block;
    }
`;

const ImageWrapper = styled.div`
    width: 50%;

    @media screen and (max-width: 40em) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: var(--space-50);
    }

    @media screen and (max-width: 30em) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);

    @media screen and (max-width: 40em) {
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (max-width: 30em) {
        width: 100%;
    }
`;

const Input = styled.input<InputProps>`
    width: 100%;
    padding: var(--space-16) var(--space-48);
    border: 0.3rem solid var(--jaguar-100);
    border-radius: var(--space-16);
    background-color: var(--white);
    background-image: url(${(props) => props.icon});
    background-size: 2.4rem;
    background-repeat: no-repeat;
    background-position: 10px center;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary-500);
    }
`;

const RequestButton = styled(Button)`
    color: var(--black);
    background-color: var(--sunglow-300);
`;

const RequestDemo = () => {
    return (
        <RequestDemoSection id="request-demo">
            <RequestDemoContainer>
                <Header variant="h5" weight="bold">
                    Ready to get your hands on Projectify?!
                </Header>
                <ContentWrapper>
                    <ImageWrapper>
                        <Image src={paperPlane} alt="PaperPlane Image" />
                    </ImageWrapper>
                    <Form>
                        <Input icon={userIcon} placeholder="Name" type="text" />

                        <Input
                            icon={emailIcon}
                            placeholder="Email"
                            type="email"
                        />

                        <Input
                            icon={companyIcon}
                            placeholder="Company"
                            type="text"
                        />

                        <RequestButton fullWidth shape="circle" size="lg">
                            Request a Demo
                        </RequestButton>
                    </Form>
                </ContentWrapper>
            </RequestDemoContainer>
        </RequestDemoSection>
    );
};

export { RequestDemo };
