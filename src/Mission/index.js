import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mission = props => {
  return (
    <Container style={{ marginTop: "2%" }}>
      <Row>
        {props.data.map((item, index) => {
          return (
            <Col xs={12} md={6} sm={6} lg={4} key={index}>
              <Card key={item.id}>
                <Card.Header>{item.mission_name}</Card.Header>
                <Card.Body id="style-1">
                  <blockquote className="blockquote mb-0">
                    <p style={{ fontSize: "0.9rem" }}> {item.description} </p>
                    <strong>Pay Load Id</strong>

                    {item.payload_ids.map((element, index) => (
                      <footer className="blockquote-footer" key={index}>
                        <cite title="Source Title">
                          <Link to={`/payload/${element}`}>{element}</Link>
                        </cite>
                      </footer>
                    ))}
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Mission;
