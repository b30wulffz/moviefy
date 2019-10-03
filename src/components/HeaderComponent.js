import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Container } from 'reactstrap'
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Row>
                    <Col sm="12" md="12" lg="6">
                        <Navbar expand="md" light className="navbar">
                            <Container>
                                <NavbarBrand className="nav-logo" href="/">Moviefy</NavbarBrand>
                                <NavbarToggler onClick={this.toggle} />
                            </Container>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to="/home" className="nav-link">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/add_movie" className="nav-link">Add movie</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>

                        </Navbar>
                    </Col>
                </Row>
            </header>
        );
    }
}