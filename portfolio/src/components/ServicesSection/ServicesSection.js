import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class ServicesSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="servicesSection">
                    <Container className="servicesContainer">
                        <h1 className="servicesTitle">Our Services</h1>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <Card className="text-center mainCard">
                                    <Card.Img className="cardImg" variant="center" src="http://localhost/images/creative.png" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Button className="btn btn-primary" variant="primary">more details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <Card className="mainCard">
                                    <img className="cardImg" variant="top" src="http://localhost/images/creative.png" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Button className="btn btn-primary" variant="primary">more details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <Card className="mainCard">
                                    <img className="cardImg" variant="top" src="http://localhost/images/creative.png" />
                                    <Card.Body>
                                        <h3 className="cardTitle">Card Title</h3>
                                        <p className="cardDes">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <Button className="btn btn-primary" variant="primary">more details</Button>
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

export default ServicesSection;