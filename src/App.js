import { Typography, TypographyProps } from "./design-system";

const App = () => {
    return (
        <>
            <Typography variant={TypographyProps.variant.h2}>Hello</Typography>;
            <Typography variant={TypographyProps.variant.subtitleLG}>
                Hello
            </Typography>
        </>
    );
};

export default App;
