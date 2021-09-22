import React, { Component, Fragment } from 'react'
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';

export default class BannerSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner">
                    <Container className="text-center">
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h1 className="topTitle">Software Engineer</h1>
                                <p className="topDes">Web Developer & designer</p>
                                <button className="btn btn-danger">more details</button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
