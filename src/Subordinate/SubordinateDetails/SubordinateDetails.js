import React from "react";
import "./subordinate_details.css"

const SubordinateDetails = details => {
    // Get Details from DB after auth
    // setDetails

    return (
        <div 
        id="subord-details-container"
        >
            <h4 
            className="subord-name display-4"
            >
                Name: {details.name}
            </h4>
            <h4 
            className="subord-email lead" 
            >
                Email: {details.email}
            </h4>
            <h4 
            className="subord-id lead" 
            >
                Subordinate ID: {details.subordinate_id}
            </h4>
        </div>
    );
}

export default SubordinateDetails;