import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import SubordinateDetails from '../SubordinateDetails/SubordinateDetails';
import Baselayout from '../Baselayout/baselayout';
import AddSeller from '../AddSeller/AddSeller'


function Home ({ match }) {

  const [details, setDetails] = useState(
    {
        name:"Sample Subordinate", 
        email:"samplesubordinate@nic.in",
        password: "",
        subordinate_id: "123456",
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
           <SubordinateDetails  {...details} /> 
        } 
        />
        <Route 
        path={`${match.path}/add_seller`} 
        render={() => <AddSeller/>} 
        />
       
      </div> 
    )
  }

  export default Home