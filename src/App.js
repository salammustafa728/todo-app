import React from "react";
import Settings from "./Componets/context/Setteings";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import ToDo from "./Componets/todo/todo";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
// } from "react-router-dom";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Settings>
          <Header />
          <ToDo />
        </Settings>
        <Footer />
      </>
    );
  }
}
