import { Login } from "./pages";
import { ForgotPassword } from "./pages/admin-auth/forgot-password/ForgotPassword";
import { UpdatePassword } from "./pages/admin-auth/update-password/UpdatePassword";

const App = () => {
    return (
        <>
            <Login />
            <ForgotPassword />
            <UpdatePassword />
        </>
    );
};

export { App };
