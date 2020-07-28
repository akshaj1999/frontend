import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const Baselayout = ({match}) => {
    
       return (
           <div>
           <Navbar bg="light" expand="lg">
         <Navbar.Brand as={Link} to={`${match.path}`}>NiCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
      <Nav.Link as={Link} to={`${match.path}`}>Home</Nav.Link>
      <Nav.Link as={Link} to={`${match.path}/login`}>Login/Signup</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to={`${match.path}/paintings`}>Paintings</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`${match.path}/handicrafts`}>Handicraft</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={`${match.path}/handicrafts`}>Clothes</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
           </div>
       )
}

export default Baselayout;