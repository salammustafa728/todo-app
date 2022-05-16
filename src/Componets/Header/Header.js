import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

export default function Header() {
  return (
    <>
      <Navbar className={`bp4-dark`}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do List App</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal" icon="home" text="Home" />
          {/* <Button className="bp4-minimal" icon="document" text="Files" /> */}
        </Navbar.Group>
      </Navbar>
    </>
  );
}
