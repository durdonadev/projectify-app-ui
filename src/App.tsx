import { useState } from "react";
import { Button, Typography } from "./design-system";

const App = () => {
    const [show, setShow] = useState(false);
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>
            <Button
                color="primary"
                size="lg"
                shape="circle"
                onClick={() => alert("Hello")}
            >
                Create a Project
            </Button>

            <Button
                color="primary"
                size="lg"
                shape="circle"
                onClick={() => setShow(true)}
            >
                Create a Project
            </Button>

            <form onSubmit={() => alert("Submitted")}>
                <Button>Submit</Button>
            </form>

            {show && <p>Helllo</p>}
        </div>
    );
};

export { App };
