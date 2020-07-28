import {Form, Button} from 'react-bootstrap'
import React, { useState } from "react";
import {Link} from "react-router-dom";
import './login.css';

const Login = () => {

    return (
        <div id="login-container">
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                <br/>
                <Button variant="primary" >
                    <Link to={'/user/register'} style={{color:"white"}}>
                        Sign-up
                    </Link>
                </Button>
            </div>
        );
}

export default Login;
