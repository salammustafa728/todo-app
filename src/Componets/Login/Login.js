import React, { useContext, useState } from "react";
import "./Login.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { When } from "react-if";
import { LoginContext } from "../context/ContextLog";

const Login = () => {
  const loginCon = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCon.login(username, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    loginCon.signup(username, password, role);
  };

  function ifLogedIn(e) {
    e.preventDefault();
    setLogin(!login);
    setSignup(false);
  }

  function ifSignedUp(e) {
    e.preventDefault();
    setSignup(!signup);
    setLogin(false);
  }

  return (
    <div>
      <When condition={!loginCon.loggedIn}>
        <div>
          <When condition={login}>
            <div>
              <Form onSubmit={handleLogin}>
                Login
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username?username:""}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
                <Button variant="secondary" type="submit" onClick={ifSignedUp}>
                  click to Sign up
                </Button>
              </Form>
            </div>
          </When>

          <When condition={signup}>
            <div>
              <Form onSubmit={handleSignup}>
                Sign Up
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username?username:""}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option> select your role </option>
                  <option value="user">user</option>
                  <option value="admin">writer</option>
                  <option value="admin">editor</option>
                  <option value="admin">admin</option>
                </Form.Select>
                <br/>
                <When condition={signup}>
                  <Button variant="primary" type="submit">
                    sign up
                  </Button>
                </When>
                <When condition={signup}>
                  <Button
                    variant="secondary"
                    type="submit"
                    onClick={ifLogedIn}
                  >
                    click to Log in
                  </Button>
                </When>
              </Form>
            </div>
          </When>
        </div>
      </When>
    </div>
  );
};

export default Login;
