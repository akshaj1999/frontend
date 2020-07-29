import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import ViewHeadDetails from './ViewHeadDetails';
import EditHeadDet from './EditHeadDet';
import ResetPass from './ResetPass'
import AddCategory from './AddCategory'
import "./dashboard.css"


export default function Dashboard() {

    const [details, setDetails] = useState(
        {
            name:"Dummy Admin", 
            email:"dummyadmin@nic.in",
            password: "dumdum",
            admin_id: "",
            isAuth: ""
        });

    const dashboardProps = {
        elements: [
            {name: "View Details", id:"view-details"}, 
            {name: "Edit Details", id:"edit-details"},
            {name: "Reset Password", id:"reset-password"},
            {name: "View Subordinates", id:"view-subordinates"},
            {name: "Edit Subordinate Details", id:"edit-subordinate-details"},
            {name: "Add Categories", id:"add-categories"},
            {name: "Sign Out", id:"sign-out"}
        ]
    }

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


    const showElements = dashboardProps.elements.map(element => (
        <div className="dashboard-element">
            <NavLink exact to={`/head/${element.id}`} className="nav-link" activeClassName="active" id={`v-pills-${element.id}-tab`} data-toggle="pill" role="tab" aria-controls={`v-pills-${element.id}`} aria-selected="false">{element.name}</NavLink>
            <hr className="divider"/>
        </div>
    
    ));

    const displayContent = dashboardProps.elements.map(element => (
            <div class="tab-pane fade show active" id={`v-pills-${element.id}`}  role="tabpanel" aria-labelledby={`v-pills-${element.id}-tab`}>
                {/* XXYYZZ render the components of the dashboard elements here */}
            </div>
            ));

    

    
    return (
        <div className="dashboard-container">
           <div 
           className="nav flex-column float-left nav-pills" 
           id="v-pills-tab" 
           role="tablist" 
           aria-orientation="vertical">
                {showElements}
                
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                {displayContent}
                
            </div>
            {/* < ViewHeadDetails  {...details} />
            < EditHeadDet 
            details={details}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
            < ResetPass
             handleChange={handleChange} 
             handleSubmit={handleSubmit}
             />
            < AddCategory /> */}
        </div>

    );

}