import { useState, useId } from "react";
import { Button, Typography, Input, Label } from "./design-system";

const App = () => {
    const [show, setShow] = useState(false);
    const emailId = useId();

    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert("Submitted")}>
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                />

                <Input
                    placeholder="About You"
                    size="lg"
                    type="textarea"
                    shape="rounded"
                    labelText="Tell us about yourself"
                    hintMessage="This is for your password"
                />
                <Button size="md" shape="rounded" fullWidth color="primary">
                    Sign Up
                </Button>
            </form>

            {show && <p>Helllo</p>}
        </div>
    );
};

export { App };
