import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = props => {
  return (
    <Card key={props.id}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body id="style-1">{props.children}</Card.Body>
    </Card>
  );
};

export default CardComponent;
