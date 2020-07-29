import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "./logo.svg"
import Dashboard from "../Dashboard"



const Baselayout = ({match}) => {
  // var icon = (
  //   <span class="logo">
  //       <img src="/logo.svg" height="33" width="120" alt="text here" />
  //   </span>
  // );
       return (
           <div>
           <Navbar bg="light" expand="lg">
         <Navbar.Brand as={Link} to={`${match.path}`}><img src={Logo} alt="NICommerce"  style={{width: 80, height: 60, marginTop: -15, marginLeft: -10, marginBottom: -12}}/> </Navbar.Brand>
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
            <Dashboard />
           </div>
       )
}

export default Baselayout;