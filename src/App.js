import React from "react";
import Settings from "./Componets/context/Setteings";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import ToDo from "./Componets/todo/todo";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
// import { When } from "react-if";
import Login from "./Componets/Login/Login";
// import { LoginContext } from "./Componets/context/ContextLog";
import ContextLog from "./Componets/context/ContextLog";
export default function App() {
  // const loginCon = useContext(LoginContext); //login context

  return (
    <>
      <ContextLog>
        <Settings>
          <Header />
          <Login />
        
            <ToDo />
        
          <Footer />
        </Settings>
      </ContextLog>
     
    </>
  );
}
