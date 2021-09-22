import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="contactSection" >
                    <Container className="contactContainer">
                        <h1 className="contactTitle text-center">contact with us</h1>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <h4>address</h4>
                                <p className="footerInfo"><FontAwesomeIcon icon={faMapMarkerAlt}/> Chachra,Jashore Sador,Jashore</p>
                                <p className="footerInfo"><FontAwesomeIcon icon={faEnvelope}/> demo@gmail.com</p>
                                <p className="footerInfo"><FontAwesomeIcon icon={faPhoneAlt}/> +0155588887</p>
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Mr. Demo" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="example@gmail.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} placeholder="Message..." />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;