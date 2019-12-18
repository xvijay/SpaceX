import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const InrField = props => (
  <Form.Group controlId="inr">
    <Form.Label>INR</Form.Label>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupPrepend">₹</InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        placeholder=""
        aria-describedby="inputGroupPrepend"
        required
        onChange={props.onChange}
        value={props.value}
      />
      <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
);

export default InrField;
