import { useState } from "react";
import { Button, Typography, Input, Modal, Avatar } from "./design-system";
import john from "./assets/image.png";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Avatar type="initials" size="lg" shape="circle">
                John Doe
            </Avatar>
            <Avatar type="photo" size="lg" shape="rounded" imageUrl={john}>
                John Doe
            </Avatar>
            <Avatar type="photo" size="lg" shape="circle" imageUrl={john}>
                John Doe
            </Avatar>
        </div>
    );
};

export { App };
