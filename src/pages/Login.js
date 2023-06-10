import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import store from './../features/store';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  store.subscribe(()=> {
    const storeData = store.getState();
    if(storeData.user.authenticate)
       return navigate("/home");
});

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
        dispatch(login({email,password}))
    } catch (err) {
      setError(err.message);
    }
  };

    return (
      <div className="h-100">
        <div className="p-4 box h-75 my-5">
          <h2 className="mb-3 text-center my-5">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="">
              <Button variant="primary" type="Submit" className="w-100">
                Log In
              </Button>
            </div>
          </Form>
          
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    );
  };

  export default Login;
