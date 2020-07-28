import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Login from './Login/Login'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Baselayout from './Baselayout/baselayout';
import Home from './Home/home';
import Register from './Register/register'
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
  