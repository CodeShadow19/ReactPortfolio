import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            background:"light",
            variant:"light",
            logoTextClass:"navbarLogoText",
            navLink:"navLinkLight",
            navBarItem:"navItemClass"
        }
    }
    render() {
        return (
            <Fragment>
                <Navbar bg={this.state.background} expand="lg" className="fixed-top" variant={this.state.variant}>
                    <Container>
                        <Link to="/"><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                        <Navbar.Toggle className={this.state.logoTextClass} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link className={this.state.navLink}><NavLink exact activeStyle={{color:'red'}} className={this.state.navBarItem} to="/">home</NavLink></Nav.Link>
                                <Nav.Link className={this.state.navLink}><NavLink exact activeStyle={{color:'red'}} className={this.state.navBarItem} to="/services">Services</NavLink></Nav.Link>
                                <Nav.Link className={this.state.navLink}><NavLink exact activeStyle={{color:'red'}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                                <Nav.Link className={this.state.navLink}><NavLink exact activeStyle={{color:'red'}} className={this.state.navBarItem} to="/about">About Me</NavLink></Nav.Link>
                                <Nav.Link className={this.state.navLink}><NavLink exact activeStyle={{color:'red'}} className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;