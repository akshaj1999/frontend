import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import SellerDetails from '../SellerDetails/SellerDetails';
import Baselayout from '../Baselayout/baselayout';
import AddProduct from '../AddProduct/AddProduct'


function Home ({ match }) {

  const [details, setDetails] = useState(
    {
        name:"Dummy Seller", 
        email:"dummyseller@nic.in",
        password: "",
        seller_id: "1234",
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
           <SellerDetails  {...details} /> 
        } 
        />
        <Route 
        path={`${match.path}/add_product`} 
        render={() => <AddProduct/>} 
        />
       
      </div> 
    )
  }

  export default Home