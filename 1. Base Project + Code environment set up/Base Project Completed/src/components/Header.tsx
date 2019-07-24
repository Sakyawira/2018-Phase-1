import * as React from 'react';

// Bootstraps are used to Create nice webapps that works on dekstops and mobile devices
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";

import { Link } from 'react-router-dom';

// Creating a header that will navigate to both First Component and Second Component respectively
export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">dankNotDank</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                {/* IndexLinkContainer creates little boxes to house different nav items */}

                <IndexLinkContainer to="/FirstComponent">
                    <NavItem>Page 1</NavItem>
                </IndexLinkContainer>

                <IndexLinkContainer to="/SecondComponent">
                    <NavItem>Page 2</NavItem>
                </IndexLinkContainer>

            </Nav>
        </Navbar>
    );
}
