import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Features } from "./sections/features/Features";
import { Hero } from "./sections/hero/Hero";

const LandingPage = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
        </>
    );
};

export { LandingPage };
