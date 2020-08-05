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
import ViewSubordinate from '../ViewSubordinate/viewsubordinate';
import AddSubordinate from '../AddSubordinate/AddSubordinate';
import EditCategory from '../EditCategory/editcategory';
import ViewCategory from '../ViewCategory/viewcategory';

function Home ({ match }) {

  const [details, setDetails] = useState(
    {
        name:"Dummy Admin", 
        email:"dummyadmin@nic.in",
        password: "",
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
//  console.log(match.path)
    return (
      <div>
        <Baselayout match={match}/>
        <Route exact
        path={`${match.path}`}
        render={() => 
           <ViewHeadDetails  {...details} /> 
        } 
        />

        <Route exact
        path={`${match.path}/view_subordinates`} 
        component={ViewSubordinate}
        />
        <Route 
        path={`${match.path}/view_subordinates/view_sub_details`} 
        render={()=> <h1> hii sub details</h1>}
        />
        <Route 
        path={`${match.path}/view_subordinates/edit_sub_details`} 
        render={()=> <h1>Edit details</h1>}
        />
        <Route 
        path={`${match.path}/add_subordinate`} 
        render={()=> <AddSubordinate/>}
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
            />
          } 
        />
         <Route 
        path={`${match.path}/edit_categories`} 
        render={() => < EditCategory/>} 
        />
         <Route 
        path={`${match.path}/view_categories`} 
        render={() => < ViewCategory/>} 
        />
       
      </div> 
    )
  }

  export default Home