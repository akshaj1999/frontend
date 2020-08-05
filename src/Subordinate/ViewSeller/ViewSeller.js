import React from 'react';
import {Card,CardDeck,Button,CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Subcard from './subcard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

function ViewSubordinate({match}) {

    const [data, setData] = React.useState({
        match: match,
        name: "Seller 1",
        email: "temp@gmail.com",
        region: "Delhi NCR",
        address: "Uttam vihar Delhi 110001",
        phone: "1234567890"
    }) ;
  
    return (
        <div>
<CardColumns>
     <Subcard  data={data}/>
     <Subcard  data={data}/>
     <Subcard  data={data}/>
     <Subcard  data={data}/>
     <Subcard  data={data}/>
  
</CardColumns>
</div>
    
    )
}

export default ViewSubordinate;