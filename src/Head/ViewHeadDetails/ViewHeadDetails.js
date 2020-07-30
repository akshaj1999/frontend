import React from "react";
import "./view_head_details.css"

const ViewHeadDetails = (details) => {
    // Get Details from DB after auth
    // setDetails
    console.log(details,"asjdsa")
    return (
        <div 
        className="head-details-container"
        id="head-details-container"
        >
            <h4 
            className="display-4"
            id="view-head-name"
            >
                Name: {details.name}
            </h4>
            <h4 
            className="head-email lead" 
            id="view-head-email"
            >
                Email: {details.email}
            </h4>
            <h4 
            className="head-id lead" 
            id="view-head-id"
            >
                Admin ID: {details.admin_id}
            </h4>
        </div>
    );
}

export default ViewHeadDetails;