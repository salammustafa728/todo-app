import React, {useContext} from "react";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
import { CloseButton, Badge } from "react-bootstrap";
import { setteingsContext } from "../context/Setteings";
import { LoginContext } from "../context/ContextLog";
import { When } from "react-if";


const List = (props) => {
  const settings = useContext(setteingsContext);
  const longinContext = useContext(LoginContext);

  return (
    <div>
      <br />

      <ListGroup as="ul">
        { settings.display?

        props.list.map((item, idx) => (
          <div key={idx} className="">
           
            
            <div key={item.id}>
              <ListGroup.Item as="li" variant="secondary">
                <Badge
                  style={{}}
                  pill
                  bg={item.complete ? "success" : "danger"}
                >
                  <h5 style={{ fontFamily: "cursive" }}>
                    {item.complete ? "Complete" : "incomplete"}
                  </h5>
                </Badge>
               <When condition={longinContext.canDo('delete')}>
                <CloseButton style={{float:"right"}}  onClick={() => props.deleteItem(item.id)} />
                </When>
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
              <When condition={longinContext.canDo('update')}>
              <ListGroup.Item as="li">
                <div onClick={() => props.toggleComplete(item.id)}>
                  Complete: {item.complete.toString()}
                </div>
              </ListGroup.Item>
              </When>
              <br />
            </div>
          </div>
        )) : props.list.filter(item=>item.complete===false).map((item, idx) => (
          <div key={idx} className="">
           
            
            <div key={item.id}>
              <ListGroup.Item as="li" variant="secondary">
                <Badge
                  style={{}}
                  pill
                  bg={item.complete ? "success" : "danger"}
                >
                  <h5 style={{ fontFamily: "cursive" }}>
                    {item.complete ? "Complete" : "incomplete"}
                  </h5>
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
                <div onClick={() => props.toggleComplete(item.id)}>
                  Complete: {item.complete.toString()}
                </div>
               
              </ListGroup.Item>
              <br />
            </div>
          </div>
        ))
      
      }
      </ListGroup>
    </div>
  );
};

export default List;
