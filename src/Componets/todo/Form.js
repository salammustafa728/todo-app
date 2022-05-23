import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setteingsContext } from "../context/Setteings";

const Formm = (props) => {
  const settings = useContext(setteingsContext);

  const postPerPageToggle = (pages) => {
    if (parseInt(pages) !== props.postPerPage) {
        props.setPostsPerPage(parseInt(pages));
    }
}
  return (
    <div>
      <br />
      <header>
        <h1>To Do List: {props.incomplete} items pending</h1>
      </header>

      <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h2>Add To Do Item</h2>
          <Form.Label>To Do Item </Form.Label>
          <Form.Control
            type="text"
            name="text"
            placeholder="Item Details"
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            name="assignee"
            placeholder="Assignee Name"
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <span>Difficulty</span>
          <Form.Range
            onChange={props.handleChange}
            defaultValue={1}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox2">
          <span>post per page</span>
          <Form.Range
            onChange={(e) => postPerPageToggle(e.target.value)}
            defaultValue={props.postPerPage}
            type="range"
            min={1}
            max={5}
            name="postPerPage"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox3">
        <label className="bp4-control bp4-switch .modifier " onClick={()=>props.toggleDisplay()}>
             <input type="checkbox" defaultChecked={true}  />
            <span className="bp4-control-indicator"></span>
                    show complete
          </label>
        </Form.Group> */}
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        <Button className='button' type="submit" onClick={props.completed} variant="outline-success">
          View Completed Items
        </Button>
      </Form>
    </div>
  );
};

export default Formm;
