import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicesPage from "../pages/ServicesPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutMe}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/projectDetails" component={ProjectDetailsPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;