import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Home from "./Home/home";
import Login from "./Login/login"

const subordinate = ({ match }) => {
    return (
        <div>
          
          <Link to={`${match.path}`}></Link>
          <Link to={`${match.path}/home`}></Link>
          
          <Route exact path={`${match.path}`} component={Login} />
          <Route path={`${match.path}/home`} component={Home} />      
        
         
        </div>
    );
}

export default subordinate;