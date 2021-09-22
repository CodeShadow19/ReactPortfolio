import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import AboutmeDetails from "../components/AboutDetails/AboutmeDetails";
import FooterSection from "../components/FooterSection/FooterSection";


class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <BreadgumSection title="About Me"/>
                <AboutmeDetails/>
                <FooterSection/>
            </Fragment>
        );
    }
}

export default AboutMe;