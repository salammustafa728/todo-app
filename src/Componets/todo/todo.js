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


const ToDo = () => {
  const settings = useContext(setteingsContext);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [postsPerPage] = useState(5);


  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    const saveDataList = settings.list;
    settings.setList([...saveDataList, item]);
  }

  function deleteItem(id) {
    const items = settings.list.filter((item) => item.id !== id);
    settings.setList(items);
    setShow(false);
  }

  function toggleComplete(id) {
    const items = settings.list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    settings.setList(items);
  }
 const setdata = (idx) => {
    localStorage.setItem('data', JSON.stringify(settings.list));
}
// const onSort = (sortType) => {
//  settings.sortType=sortType;
// }
// const sorted = settings.list.sort((a, b) => {
//   const isReversed = ((settings.sortType === 'desc') && (a.difficulty < b.difficulty)) ? -1 : 1;
//   return isReversed * a.text.localeCompare(b.text);
// });
  useEffect(() => {
    let incompleteCount = settings.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  });
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

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Form
              incomplete={incomplete}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              toggleComplete={toggleComplete}
              list={getToDoData()}
              
            />
          </Col>
          <Col xs={6} md={4}>

            <List list={getToDoData()} toggleComplete={toggleComplete}
               deleteItem={deleteItem}
               setdata={setdata}
            />
            <PaginationPages
              totallist={settings.list.length}
              paginate={paginate}
              postsPerPage={postsPerPage}
            />
            {/* <button className='btn' type='click' onClick={(e) => onSort('asc')}>sort  asc </button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;
