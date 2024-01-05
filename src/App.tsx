import {
    AdminForgotPassword,
    AdminLogin,
    AdminSignup,
    AdminResetPassword
} from "./pages";

const App = () => {
    return (
        <>
            <AdminSignup />
            <AdminLogin />
            <AdminForgotPassword />
            <AdminResetPassword />
        </>
    );
};

export { App };
