import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import PrivacyDetails from "../components/PrivacyDetails/PrivacyDetails";
import FooterSection from "../components/FooterSection/FooterSection";

class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Privacy & Policy"/>
                <PrivacyDetails/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default PrivacyPage;