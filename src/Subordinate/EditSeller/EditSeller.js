import React from 'react';
import {Table,Button} from 'react-bootstrap'

function EditSeller() {

    const data = [{name:"Seller 1"},
                   {name:"Seller 2"},
                   {name:"Seller 3"},
                   {name:"Seller 4"},
                   {name:"Seller 5"}
                ]
    return (
        <Table responsive striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Catoegories</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          data.map((value, index) => {
           return (
               <tr>
                   <td>{index+1}</td>
                   <td>{value.name}</td>
                   <td><Button>Delete</Button></td>
               </tr>
           )
          })}
  </tbody>
</Table>
    )
}

export default EditSeller;