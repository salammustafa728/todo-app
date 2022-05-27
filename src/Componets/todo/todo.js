import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/form.js";

import { v4 as uuid } from "uuid";
import List from "./List.js";

import { setteingsContext } from "../context/Setteings";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaginationPages from "./Pageniation";
import Form from "./Form.js";
import Completed from "./Completed.js";
import { LoginContext } from "../context/ContextLog";
import { When } from "react-if";

const ToDo = () => {
  const settings = useContext(setteingsContext);
  const loginCon = useContext(LoginContext);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [ setShow] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [completedItem, setComplete] = useState(false);
  const [arrayComplete, setArrComplete] = useState([]);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    const saveDataList = settings.list;
    settings.setList([...saveDataList, item]);
    localStorage.setItem("data", JSON.stringify([...saveDataList, item]));
  }

  function deleteItem(id) {
    const items = settings.list.filter((item) => item.id !== id);
    settings.setList(items);
    setShow(false);
  }

  function toggleComplete(id) {
    const items = settings.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    settings.setList(items);
  }

  const completed = () => {
    const arr = [];
    settings.list.map((ele) => {
      
      if (ele.complete) {
        arr.push(ele);
      }
      return arr;
    });
    // console.log({ arr });
    setComplete(true);
    setArrComplete(arr);
    // console.log(arr);
  };

  useEffect(() => {
    let incompleteCount = settings.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  },[settings.list, incomplete]);
  function getToDoData() {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = settings.list.slice(indexOfFirstPost, indexOfLastPost);

    if (!settings.complete) {
      return currentPosts.filter((item) => item.complete === settings.complete);
    } else {
      return currentPosts;
    }
  }
  function toggleDisplay() {
    settings.setDisplay(!settings.display);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <br />
      <Container>
        <When condition={loginCon.loggedIn}>
          <Row>
            <Col xs={12} md={8}>
              <Form
                incomplete={incomplete}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                toggleComplete={toggleComplete}
                list={getToDoData()}
                completed={completed}
                postsPerPage={postsPerPage}
                setPostsPerPage={setPostsPerPage}
                toggleDisplay={toggleDisplay}
              />
            </Col>
            <Col xs={6} md={4}>
              <List
                list={getToDoData()}
                toggleComplete={toggleComplete}
                deleteItem={deleteItem}
              />
              <PaginationPages
                totallist={settings.list.length}
                paginate={paginate}
                postsPerPage={postsPerPage}
              />
              {completedItem && (
                <Completed
                  completed={completed}
                  arrayComplete={arrayComplete}
                  toggleComplete={toggleComplete}
                  deleteItem={deleteItem}
                />
              )}
            </Col>
          </Row>
        </When>
      </Container>
    </>
  );
};

export default ToDo;
