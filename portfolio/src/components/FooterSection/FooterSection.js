import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class FooterSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Container className="footerContainer">
                        <Row>
                            <Col sm={12} md={6} lg={3}>
                                <h4 className="footerTitle">follow me</h4>
                                <a href="#" target="_blank">facebook</a>
                                <a href="#" target="_blank">youtube</a>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4 className="footerTitle">address</h4>
                                <p className="footerInfo"><FontAwesomeIcon icon={faMapMarkerAlt}/> Chachra,Jashore Sador,Jashore</p>
                                <p className="footerInfo"><FontAwesomeIcon icon={faEnvelope}/> demo@gmail.com</p>
                                <p className="footerInfo"><FontAwesomeIcon icon={faPhoneAlt}/> +0155588887</p>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4 className="footerTitle">information</h4>
                                <li>
                                    <Link to="/about">about me</Link>
                                    <Link to="/contact">contact me</Link>
                                </li>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4 className="footerTitle">legal</h4>
                                <li>
                                    <Link to="/refund">refund policy</Link>
                                    <Link to="/terms">terms & condition</Link>
                                    <Link to="/privacy">privacy & policy</Link>
                                </li>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default FooterSection;