import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import { CloseButton, Badge } from "react-bootstrap";

const Completed = (props) => {
  return (
    <div>

<ListGroup as="ul">
   {console.log(props.arrayComplete)}
   {props.arrayComplete.map((item, idx) => (
     <div key={idx} className="">
       <div key={item.id}>
         <ListGroup.Item as="li" variant="secondary">
         <Badge
             style={{}}
             pill
             bg="success"
           >
             <div >
             Complete: true
           </div>
           </Badge>
          
           <CloseButton style={{float:"right"}}  onClick={() => props.deleteItem(item.id)} />
         </ListGroup.Item>
         <ListGroup.Item as="li"  variant="primary">
         {item.text}
         </ListGroup.Item>
         <ListGroup.Item>
           <h5 style={{}}> Assigned to : {item.assignee} </h5>
         </ListGroup.Item>
         <ListGroup.Item as="li" disabled>
           Difficulty: {item.difficulty}
         </ListGroup.Item>
         <ListGroup.Item as="li">
           <div>
             Complete: true
           </div>
          
         </ListGroup.Item>
         <br />
       </div>
     </div>
   ))}
 </ListGroup>
    </div>
  )
}

export default Completed