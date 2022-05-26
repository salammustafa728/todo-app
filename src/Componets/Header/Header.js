import React, { useContext } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { LoginContext } from "../context/ContextLog";
import { When } from "react-if";

export default function Header() {
  const loginContext = useContext(LoginContext);
  return (
    <>
      <Navbar className={`bp4-dark`}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do List App</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal" icon="home" text="Home" />
          <When condition={loginContext.loggedIn}>
                        <Button intent='danger' onClick={(e) => loginContext.logout()}>
                            Logout
                        </Button>
                    </When>
        </Navbar.Group>
      </Navbar>
    </>
  );
}
