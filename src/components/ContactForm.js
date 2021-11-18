import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const ContactForm = () => {
  return (
    <Form className="contact__form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Label htmlFor="basic-url">Website</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" style={{ height: '224px', resize: 'none' }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled>
        Submit
      </Button>
    </Form>
  );
};
