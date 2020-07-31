import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "./logo.svg"



const Baselayout = ({match}) => {
       return (
           <div>
              <Navbar bg="light" expand="lg">
                  <Navbar.Brand as={Link} to={`${match.path}`}><img src={Logo} alt="NICommerce"  style={{width: 80, height: 60, marginTop: -15, marginLeft: -10, marginBottom: -12}}/> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                <Nav.Link as={Link} to={`${match.path}`}>Home</Nav.Link>
                <Nav.Link as={Link} to={`${match.path}/view_subordinates`}>View Subordinate</Nav.Link>
                <Nav.Link as={Link} to={`${match.path}/add_subordinate`}>Add Subordinate</Nav.Link>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Nav.Link as={Link} to={`${match.path}/add_categories`}>Add Categories</Nav.Link>
                <Nav.Link as={Link} to={`${match.path}/edit_categories`}>Edit Categories</Nav.Link>
                <Nav.Link as={Link} to={`${match.path}/view_categories`}>View Categories</Nav.Link>
                </NavDropdown>
                
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={`${match.path}/edit_details`}>Edit Details</NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} to={`${match.path}/reset_password`}>Reset Password</NavDropdown.Item> */}
                  <NavDropdown.Item as={Link} to={`${match.path}/sign_out`}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           </div>

       )
}

export default Baselayout;