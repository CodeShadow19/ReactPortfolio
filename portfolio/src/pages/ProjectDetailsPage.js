import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BannerSection from "../components/BannerSection/BannerSection";
import BreadgumSection from "../components/BreadgumSection/BreadgumSection";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import FooterSection from "../components/FooterSection/FooterSection";

class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
               <TopNavigation/>
               <BreadgumSection title="Project Details" />
               <ProjectDetails/>
               <FooterSection/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;