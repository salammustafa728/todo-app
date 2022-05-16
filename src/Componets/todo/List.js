import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const List = (props) => {
  return (
    <div>
        <br/>
        
      <ListGroup as="ul">
        {props.list.map((item, idx) => (
          <div key={idx} className="">
            <div key={item.id}>
              <ListGroup.Item as="li" variant="secondary">
                {item.text}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Assigned to: {item.assignee}
              </ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Difficulty: {item.difficulty}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <div onClick={() => props.toggleComplete(item.id)}>
                  Complete: {item.complete.toString()}
                </div>
              </ListGroup.Item>

              <hr />
            </div>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
