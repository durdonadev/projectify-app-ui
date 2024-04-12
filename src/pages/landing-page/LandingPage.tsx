import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Features } from "./sections/features/Features";
import { Hero } from "./sections/hero/Hero";
import Brands from "./sections/brands/Brands";
import { PricePlans } from "./sections/price-plan/PricePlans";
import { RequestDemo } from "./sections/request-demo/RequestDemo";
import { Contact } from "./sections/contact/Contact";
import { Footer } from "./sections/footer/Footer";

const LandingPage = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Brands />
            <Features />
            <PricePlans />
            <RequestDemo />
            <Contact />
            <Footer />
        </>
    );
};

export { LandingPage };
