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
import ViewHeadDetails from './ViewHeadDetails/ViewHeadDetails';
import EditHeadDetails from './EditHeadDet/EditHeadDet';
import ResetPass from './ResetPass/ResetPass';
import AddCategory from './AddCategory/AddCategory'

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
        
        <Link to={`${match.path}`}></Link>
        <Link to={`${match.path}/home`}></Link>
        
        <Route exact path={`${match.path}`} component={Login} />
        <Route path={`${match.path}/home`} component={Home} />      
      
       
      </div>
    )
  }

export default Head;