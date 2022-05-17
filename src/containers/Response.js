import React from "react";
import { Row, Col } from "react-bootstrap";

// here is the set up for each response that comes from the api.
function Response({ prompt, response }) {
  return (
    <div className="bg-light p-3 mb-3">
      <Row>
        <Col xs={2}>
          <p className="fw-bold">Prompt:</p>
        </Col>
        <Col>
          <p>{prompt}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <p className="fw-bold">Response:</p>
        </Col>
        <Col>
          <p>{response}</p>
        </Col>
      </Row>
      <Row className="divider"></Row>
    </div>
  );
}

export default Response;
