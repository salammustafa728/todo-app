import React, { useContext } from "react";
import { Switch } from '@blueprintjs/core';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Formm = (props) => {
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
        <Switch  defaultChecked={true} onClick={props.toggleDisplay}>view Done Items  </Switch>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
       
      </Form>
    </div>
  );
};

export default Formm;
