import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/form.js";

import { v4 as uuid } from "uuid";
import List from "./List.js";

import { setteingsContext } from '../context/Setteings';

import Card from "react-bootstrap/Card";
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import PaginationPages from "./Pageniation.js";
const ToDo = () => {
  const settings = useContext(setteingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  });
  const indexOfLastPost = currentPage * settings.items;
  const indexOfFirstPost = indexOfLastPost - settings.items;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <br/>
     <Container>
          <Row>
            <Col xs={12} md={8}>

            <Card style={{ width: "38rem" }}>
              <br/>
        <header>
          <h1>To Do List: {incomplete} items pending</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h2>Add To Do Item</h2>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <label>
                <span>To Do Item</span>
                <input
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                />
              </label>
            </Card.Text>

            <Card.Text>
              <label>
                <span>Assigned To</span>
                <input
                  onChange={handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                />
              </label>
            </Card.Text>
            <Card.Text>
              <label>
                <span>Difficulty</span>
                <input
                  onChange={handleChange}
                  defaultValue={3}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                />
              </label>
            </Card.Text>
            <Card.Text>
              <label>
                <button type="submit">Add Item</button>
              </label>
            </Card.Text>
          </Card.Body>
        </form>
      </Card>
            </Col>
            <Col xs={6} md={4}>
            <List list={list} toggleComplete={toggleComplete} />
            <PaginationPages
              items={settings.items}
              totallist={list.length}
              paginate={paginate}
              />
            </Col>
          </Row>
          </Container>
     
   
    </>
  );
};

export default ToDo;
