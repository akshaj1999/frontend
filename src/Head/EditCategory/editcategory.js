import React from 'react';
import {Table,Button} from 'react-bootstrap'

function EditCategory() {

    const data = [{name:"Category 1"},
                   {name:"Category 2"},
                   {name:"Category 3"},
                   {name:"Category 4"},
                   {name:"Category 5"}
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

export default EditCategory;