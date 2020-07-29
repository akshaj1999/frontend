import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Login from '../User/Login/login'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Baselayout from '../User/Baselayout/baselayout';
import Home from '../User/Home/home';
import Register from '../User/Register/register'
function User({ match }) {
    return (
      <div>
        <Baselayout match={match}/>
        <Link to={`${match.path}`}></Link>
        <Link to={`${match.path}/login`}></Link>
        
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.path}/register`} component={Register} />
        <Route path={`${match.path}/login`} component={Login} />
      </div>
    )
  }
  export default User;
  