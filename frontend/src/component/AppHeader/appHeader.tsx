import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const AppHeader = () => {
  return (
    <Container data-test-id="app-header" fluid>
      <Row>
        <Col md={8}>
          <h2>User Search</h2>
        </Col>
      </Row>
    </Container>
  );
};
