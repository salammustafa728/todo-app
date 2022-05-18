import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formm = (props) => {
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
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formm;
