import React from "react";

import { useEffect } from "react";
import { admin } from "./api";
import { Typography } from "./design-system";

const App = () => {
    // useEffect(() => {
    //     admin
    //         .forgotPassword("zubairsobirov@gmail.com")
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    return (
        <>
            <Typography variant="h5">Hello</Typography>;
        </>
    );
};

export { App };
