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
                    error={true}
                    hintMessage="This is for your password"
                />

                <Input
                    placeholder="About You"
                    size="md"
                    type="textarea"
                    shape="rounded"
                    labelText="Tell us about yourself"
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
