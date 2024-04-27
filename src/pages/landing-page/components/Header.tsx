import styled from "styled-components";
import bgImage from "../../../assets/images/bg-effect.png";

const Header = styled.header`
    background: url(${bgImage}) center/cover,
        linear-gradient(to bottom, #f7f3ff 0%, #fdfcff 100%);
`;

export { Header };
