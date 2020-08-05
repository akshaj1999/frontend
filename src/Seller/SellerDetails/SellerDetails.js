import React from "react";
import "./seller_details.css"

const SellerDetails = details => {
    // Get Details from DB after auth
    // setDetails

    return (
        <div 
        className="seller-details-container"
        id="seller-details-container"
        >
            <h4 
            className="seller-name display-4"
            >
                Name: {details.name}
            </h4>
            <h4 
            className="seller-email lead" 
            >
                Email: {details.email}
            </h4>
            <h4 
            className="seller-id lead" 
            >
                Seller ID: {details.seller_id}
            </h4>
        </div>
    );
}

export default SellerDetails;