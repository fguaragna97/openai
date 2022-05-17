import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

import ResponseList from "./containers/ResponseList";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("alldata"));
    const string = localStorage.getItem("alldata");
    setData(parseInt(string.split("],")));
    console.log(data);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = event.target.elements.prompt.value;

    const bodyresponse = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    try {
      setError("");
      setLoading(true);
      const answer = await fetch(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
          body: JSON.stringify(bodyresponse),
        }
      );
      const apidata = await answer.json();

      const response = apidata.choices[0].text;

      const info = { prompt, response };

      setData([info, ...data]);
      localStorage.setItem("alldata", JSON.stringify([info, ...data]));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-4">Fun with AI</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Enter your prompt</Form.Label>
              <Form.Control type="text" as="textarea" name="prompt" rows={8} />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                type="submit"
                className="py-2 px-5"
                disabled={loading}
              >
                {loading ? "Loading" : "Submit"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="my-3">Responses</h2>
          <ResponseList data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
