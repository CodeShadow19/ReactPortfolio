import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class BreadgumSection extends Component {

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="breadgumSection">
                    <Container className="breadgumContainer">
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h1 className="breadgumTitle">{this.props.title}</h1>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default BreadgumSection;