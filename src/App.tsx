import { useState, useId } from "react";
import { Button, Typography, Input, Label } from "./design-system";

const App = () => {
    const [value, setValue] = useState<string>("");
    const [text, setText] = useState<string>("");

    const handleOnChange = (value: string) => {
        setValue(value);
    };

    const handleOnChangeTextarea = (value: string) => {
        setText(value);
    };

    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert(`${value} ${text}`)} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                    onChange={handleOnChange}
                    value={value}
                />

                <Input
                    type="textarea"
                    placeholder="About Me"
                    size="md"
                    shape="rounded"
                    labelText="About Me"
                    onChange={handleOnChangeTextarea}
                    value={text}
                />

                <Button size="md" shape="rounded" color="primary">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export { App };
