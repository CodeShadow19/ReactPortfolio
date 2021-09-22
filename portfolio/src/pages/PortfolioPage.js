import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import AllProjects from "../components/AllProjects/AllProjects";
import FooterSection from "../components/FooterSection/FooterSection";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="Our Portfolio"/>
                <AllProjects/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default PortfolioPage;