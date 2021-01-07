import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState} from 'react';

const ajax = require('ajax');
const $ = require('jquery');

const Formx = ()  => {
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");

      const submitRequest = async(e) => {
        e.preventDefault();
        console.log(email, message);

        var obj = {"email": email, "message":message};

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/access",
            data: {
              email,
              message
            }}).done(function (res) {
            console.log(res);
      });


  }



    return (
      <Form onSubmit={submitRequest} style={{padding:20}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onKeyUp={(e) => setEmail(e.target.value)} name="message" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control onKeyUp={(e) => setMessage(e.target.value)} name="email" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default Formx;

