import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Logo from "../Baselayout/logo.svg";

import ViewHeadDetails from '../ViewHeadDetails/ViewHeadDetails';
import EditHeadDetails from '../EditHeadDet/EditHeadDet';
import ResetPass from '../ResetPass/ResetPass';
import AddCategory from '../AddCategory/AddCategory'
import Baselayout from '../Baselayout/baselayout';
import viewSubordinate from '../ViewSubordinate/viewsubordinate';
import { propTypes } from 'react-bootstrap/esm/Image';


function Home ({ match }) {

  const [details, setDetails] = useState(
    {
        name:"Dummy Admin", 
        email:"dummyadmin@nic.in",
        password: "dumdum",
        admin_id: "007",
        isAuth: ""
    });

  const handleChange = detail => e => {
    e.preventDefault();
    setDetails({...details, [detail]:e.target.value})
}

const handleSubmit = e => {
    e.preventDefault();
    // if isAuth
    // POST the changes to the DB
}   
 console.log(match.path)
    return (
      <div>
        <Baselayout match={match}/>
        <Route exact
        path={`${match.path}`}
        render={() => 
           <ViewHeadDetails  {...details} /> 
        } 
        />
          <Route 
        path={`${match.path}/reset_password`} 
        render={() => < ResetPass
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            />} 
        />

        <Route 
        path={`${match.path}/add_categories`} 
        render={() => < AddCategory/>} 
        />
        <Route 
        path={`${match.path}/edit_details`} 
        render={() => < EditHeadDetails 
            details={details}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />} 
          />

      </div> 
    )
  }

  export default Home