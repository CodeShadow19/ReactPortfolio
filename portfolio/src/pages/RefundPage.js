import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import RefundDetails from "../components/RefundDetails/RefundDetails";
import FooterSection from "../components/FooterSection/FooterSection";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Refund & Policy"/>
                <RefundDetails/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default RefundPage;