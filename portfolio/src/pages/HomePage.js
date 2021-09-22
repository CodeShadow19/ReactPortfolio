import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BannerSection from "../components/BannerSection/BannerSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import SkillSection from "../components/SkillSection/SkillSection";
import SummarySection from "../components/SummarySection/SummarySection";
import ContactSection from "../components/ContactSection/ContactSection";
import ClientReviewSection from "../components/ClientReviewSection/ClientReviewSection";
import FooterSection from "../components/FooterSection/FooterSection";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BannerSection/>
                <ServicesSection/>
                <PortfolioSection/>
                <SkillSection/>
                <SummarySection/>
                <ContactSection/>
                <ClientReviewSection/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default HomePage;