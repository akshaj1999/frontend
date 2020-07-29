import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Login from './Login/login'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Baselayout from './Baselayout/baselayout';
import Home from './Home/home';
import ViewHeadDetails from './ViewHeadDetails';
import EditHeadDetails from './EditHeadDet';
import ResetPass from './ResetPass';
import AddCategory from './AddCategory'

const Head = ({match}) => {
    const [details, setDetails] = useState(
        {
            name:"Dummy Admin", 
            email:"dummyadmin@nic.in",
            password: "dumdum",
            admin_id: "",
            isAuth: ""
        });

        const {name, email, password} = details;

    // Storing the database results for these elements in states?

    const handleChange = detail => e => {
        e.preventDefault();
        setDetails({...details, [detail]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // if isAuth
        // POST the changes to the DB
    }

    return (
      <div>
        <Baselayout match={match}/>
        <Link to={`${match.path}`}></Link>
        <Link to={`${match.path}/login`}></Link>
        
        
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.path}/login`} component={Login} />
        <Route 
        path={`${match.path}/view-details`} 
        render={() => <ViewHeadDetails 
            {...details}
            />} 
        />
        <Route 
        path={`${match.path}/edit-details`} 
        render={() => < EditHeadDetails 
            details={details}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />} 
        />
        <Route 
        path={`${match.path}/reset-password`} 
        render={() => < ResetPass
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            />} 
        />
        <Route 
        path={`${match.path}/add-categories`} 
        render={() => < AddCategory/>} 
        />
      </div>
    )
  }

export default Head;