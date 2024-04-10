import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Features } from "./sections/features/Features";
import { Hero } from "./sections/hero/Hero";
import Brands from "./sections/brands/Brands";

const LandingPage = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Brands />
            <Features />
        </>
    );
};

export { LandingPage };
