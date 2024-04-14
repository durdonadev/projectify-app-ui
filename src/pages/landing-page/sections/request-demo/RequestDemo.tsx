import styled from "styled-components";
import { Button, Icon, Typography } from "../../../../design-system";
import paperPlane from "../../../../assets/images/request-demo/paper-plane.svg";
import { Container, SectionBase } from "../../components";

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
`;

const ImageWrapper = styled.div`
    width: 50%;
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
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: var(--space-16) var(--space-48) !important;
    border: 0.3rem solid var(--jaguar-100);
    border-radius: var(--space-16);

    &:focus {
        outline: none;
        border: 0.3rem solid var(--primary-500);
    }
`;

const InputIcon = styled(Icon)`
    position: absolute;
    left: var(--space-14);
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
                        <InputWrapper>
                            <InputIcon iconName="user" />
                            <Input placeholder="Name" type="text"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="email" />
                            <Input placeholder="Email" type="email"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="company" />
                            <Input placeholder="Company" type="text"></Input>
                        </InputWrapper>
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
