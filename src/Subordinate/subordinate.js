import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Home from "./Home/home";
import Login from "./Login/login"
import ForgotPassword from './ForgotPassword/ForgotPassword'

const subordinate = ({ match }) => {
    return (
        <div>
          
          <Link to={`${match.path}`}></Link>
          <Link to={`${match.path}/home`}></Link>
          
          <Route exact path={`${match.path}`} component={Login} />
          <Route path={`${match.path}/home`} component={Home} />      
          <Route path={`${match.path}/forgot-password`} component={ForgotPassword} />
         
        </div>
    );
}

export default subordinate;