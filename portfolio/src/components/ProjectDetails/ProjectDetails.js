import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="projectDetails">
                    <Container className="projectDetailsContainer">
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h2 className="projectName">Why do we use it?</h2>
                                <img className="projectImg justify-content-center" src="http://localhost/images/laravel.jpg" />
                                <p className="projectDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;