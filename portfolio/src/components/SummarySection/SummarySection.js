import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class SummarySection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summarySection">
                    <Container className="summaryContainer text-center">
                        <Row>
                           <Col lg={8} md={6} sm={12}>
                               <Row>
                                   <Col sm={12} md={6} lg={6}>
                                       <h1 className="countNumber">
                                           <CountUp start={0} end={100}>
                                               {({ countUpRef, start }) => (
                                                   <VisibilitySensor onChange={start} delayedCall>
                                                       <span ref={countUpRef} />
                                                   </VisibilitySensor>
                                               )}
                                           </CountUp>
                                       </h1>
                                       <h4 className="countTitle">Total Projects</h4>
                                       <hr className="bg-white w-25"/>
                                   </Col>
                                   <Col sm={12} md={6} lg={6}>
                                       <h1 className="countNumber">
                                           <CountUp start={0} end={100}>
                                               {({ countUpRef, start }) => (
                                                   <VisibilitySensor onChange={start} delayedCall>
                                                       <span ref={countUpRef} />
                                                   </VisibilitySensor>
                                               )}
                                           </CountUp>
                                       </h1>
                                       <h4 className="countTitle">Total Clients</h4>
                                       <hr className="bg-white w-25"/>
                                   </Col>
                               </Row>
                           </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="workCard">
                                    <Card.Body>
                                        <Card.Title className="cardTitle text-justify">How i Work</Card.Title>
                                        <Card.Text>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering </p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis </p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                        </Card.Text>
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

export default SummarySection;