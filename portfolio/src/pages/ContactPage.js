import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Contact Page" />
                <ContactSection/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default ContactPage;