import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { PaginationButtons } from '../components/PaginationButtons';
import { NewsCard } from '../components/NewsCard';

const News = () => {
  return (
    <Container>
      <h1>News</h1>
      <PaginationButtons />
      <Row className="d-flex align-items-center">
        <Col>
          <NewsCard image="./images/news/news-1.jpg" />
        </Col>
        <Col>
          <NewsCard image="./images/news/news-2.jpg" />
        </Col>
        <Col>
          <NewsCard image="./images/news/news-3.jpg" />
        </Col>
        <Col>
          <NewsCard image="./images/news/news-4.jpg" />
        </Col>
        <Col className="d-none d-md-flex">
          <NewsCard image="./images/news/news-5.jpg" />
        </Col>
        <Col className="d-none d-md-flex">
          <NewsCard image="./images/news/news-6.jpg" />
        </Col>
        <Col className="d-none d-md-flex">
          <NewsCard image="./images/news/news-7.jpg" />
        </Col>
        <Col className="d-none d-md-flex">
          <NewsCard image="./images/news/news-8.jpg" />
        </Col>
      </Row>

      <PaginationButtons />
    </Container>
  );
};

export default News;
