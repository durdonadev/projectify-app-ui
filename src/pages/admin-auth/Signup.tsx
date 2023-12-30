import { Button, Typography } from "../../design-system";
import { AuthWrapper } from "../components";

import flatIronBuilding from "../../assets/images/team-work.jpg";

const Signup = () => {
    return (
        <AuthWrapper imageUrl={flatIronBuilding}>
            <Typography variant="h1">Hellp</Typography>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis maiores, ipsa nemo rem nesciunt doloribus in, magnam
                sequi tempora aliquam, sapiente tenetur accusamus veniam
                assumenda fugit incidunt esse eos. Est.
            </p>
        </AuthWrapper>
    );
};

export { Signup };
