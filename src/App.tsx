import { Login } from "./pages";
import { ForgotPassword } from "./pages";
import { UpdatePassword } from "./pages";
import { MainLayout } from "./pages/components";

const App = () => {
    return (
        <>
            <Login />
            <ForgotPassword />
            <UpdatePassword />
            <MainLayout>Hello</MainLayout>
        </>
    );
};

export { App };
