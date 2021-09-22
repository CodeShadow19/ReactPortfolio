import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class PortfolioSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="portfolioSection">
                    <Container className="portfolioContainer">
                        <h1 className="portfolioTitle">our portfolio</h1>
                        <Row>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center  mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center  mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center  mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center  mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center  mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4} className="portfolioCard">
                                <Card className="text-center justify-content-center mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/laravel.jpg" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Link to="/projectDetails" className="btn btn-primary" variant="primary">more details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default PortfolioSection;