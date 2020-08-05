import React from 'react';
import {Card,CardDeck,Button,CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom';


function Subcard({data}) {
  
   return(
    <Card>
    <Card.Body>
   <Card.Title>{data.name}</Card.Title>
      <Card.Text>
       Email : {data.email}<br/>
       Region: {data.region}<br/>
       Address : {data.address}<br/>
       Phone: {data.phone}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Body>
    <Card.Link as={Link} to={`${data.match.path}/view_sel_details`} >View</Card.Link>
    <Card.Link as={Link} to={`${data.match.path}/edit_sel_details`} href="#">Edit</Card.Link>
  </Card.Body>
    </Card.Footer>
  </Card>
   )
}
export default Subcard;