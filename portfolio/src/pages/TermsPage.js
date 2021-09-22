import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import TermsDetails from "../components/TermsDetails/TermsDetails";
import FooterSection from "../components/FooterSection/FooterSection";

class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Terms & Condition"/>
                <TermsDetails/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default TermsPage;