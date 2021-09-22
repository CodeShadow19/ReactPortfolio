import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import FooterSection from "../components/FooterSection/FooterSection";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Our Services"/>
                <ServicesSection/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default ServicesPage;