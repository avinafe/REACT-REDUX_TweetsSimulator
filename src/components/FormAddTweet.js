import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormAddTweet() {
  const [formData, setFormData] = useState({
    name: "",
    tweet: ""
  });

  const onChange = e => {
    e.preventDefault();
  };

  return (
    <Form className="m-3">
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" rows="3" name="tweet">
          Escribe tu mensaje
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" onClick="onChange">
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
}
