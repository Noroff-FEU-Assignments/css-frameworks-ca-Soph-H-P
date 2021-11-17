import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const TabsContent = () => {
  return (
    <div className="d-none d-md-block">
      <Tabs defaultActiveKey="one" id="controlled-tab-example" className="mb-3">
        <Tab eventKey="one" title="First">
          <Image src="./images/tab/tab-1.jpg" fluid />
          <Container className="d-flex flex-column justify-content-between">
            <Row>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
              laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
              lectus non maximus. Sed condimentum mattis rhoncus.
            </Row>
            <Row className="tabs__social d-flex justify-content-start align-items-center">
              <Col md={2} className="text-center">
                SHARE
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faFacebookF} color="black" size="2x" />
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faTwitter} color="black" size="2x" />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="two" title="Second">
          <Image src="./images/tab/tab-2.jpg" fluid />
          <Container className="d-flex flex-column justify-content-between">
            <Row>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem rem.
              Veritatis, aspernatur dolor quas reiciendis rem magnam id voluptas asperiores
              quibusdam a! Necessitatibus ea, quae similique fugit quidem distinctio.
            </Row>
            <Row className="tabs__social d-flex justify-content-start align-items-center">
              <Col md={2} className="text-center">
                SHARE
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faFacebookF} color="black" size="2x" />
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faTwitter} color="black" size="2x" />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="three" title="Third">
          <Image src="./images/tab/tab-3.jpg" fluid />
          <Container className="d-flex flex-column justify-content-between">
            <Row>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dicta
              provident. Deleniti aut accusantium placeat dolor odio animi hic exercitationem
              debitis, labore inventore odit cupiditate nulla quis repellat accusamus dicta?
            </Row>
            <Row className="tabs__social d-flex justify-content-start align-items-center">
              <Col md={2} className="text-center">
                SHARE
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faFacebookF} color="black" size="2x" />
              </Col>
              <Col md={1} className="text-center">
                <FontAwesomeIcon icon={faTwitter} color="black" size="2x" />
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
};
