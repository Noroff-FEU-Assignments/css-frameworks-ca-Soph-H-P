import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ContactForm } from '../components/ContactForm';
import { ContactDetails } from '../components/ContactDetails';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, order: 'last' }}>
            <ContactDetails />
        </Col>
        <Col className="contact__container" md={6}>
          <h1>Submit your details</h1>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
