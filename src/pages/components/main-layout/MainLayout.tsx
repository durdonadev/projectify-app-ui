import { FC, ReactNode } from "react";
import "./MainLayout.css";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className="main-layout-wrapper">
            <section className="menu"></section>
            <section className="content">{children}</section>
        </main>
    );
};

export { MainLayout };
