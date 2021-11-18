import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer>
      <Container className="text-center">
        <Row className="align-items-center">
          <Col className="footer__icon--left" xs={12} md={4}>
            <FontAwesomeIcon icon={faVimeoV} color="#767676" size="2x" />
            <FontAwesomeIcon icon={faYoutube} color="#767676" size="2x" />
          </Col>
          <Col xs={6} md={4}>hello@yay.com</Col>
          <Col  className="footer__copy--right"xs={6} md={4}>Copyright 2020</Col>
        </Row>
      </Container>
    </footer>
  );
};
