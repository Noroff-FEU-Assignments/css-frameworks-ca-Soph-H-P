import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const AccordionContent = () => {
  return (
    <div className="d-md-none">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
            <Container className="text-center">
              <Image src="./images/tab/tab-1.jpg" fluid />
            </Container>
            <Container>
              <Row xs={5} className="accordion__social">
                <Col className="text-center">SHARE</Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faFacebookF} color="$color-navlink" size="2x" />
                </Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faTwitter} color="$color-navlink" size="2x" />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem rem.
            Veritatis, aspernatur dolor quas reiciendis rem magnam id voluptas asperiores quibusdam
            a! Necessitatibus ea, quae similique fugit quidem distinctio.
            <Container className="text-center">
              <Image src="./images/tab/tab-2.jpg" fluid />
            </Container>
            <Container>
              <Row xs={5} className="accordion__social">
                <Col className="text-center">SHARE</Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faFacebookF} color="$color-navlink" size="2x" />
                </Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faTwitter} color="$color-navlink" size="2x" />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dicta provident.
            Deleniti aut accusantium placeat dolor odio animi hic exercitationem debitis, labore
            inventore odit cupiditate nulla quis repellat accusamus dicta?
            <Container className="text-center">
              <Image src="./images/tab/tab-3.jpg" fluid />
            </Container>
            <Container>
              <Row xs={6} className="accordion__social">
                <Col className="text-center">SHARE</Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faFacebookF} color="$color-navlink" size="2x" />
                </Col>
                <Col className="text-center">
                  <FontAwesomeIcon icon={faTwitter} color="$color-navlink" size="2x" />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
