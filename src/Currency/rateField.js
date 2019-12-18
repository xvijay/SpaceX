import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const RateField = props => (
  <Form.Group controlId="rate">
    <Form.Label>Rate</Form.Label>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        value={props.value}
        type="text"
        placeholder="Rate"
        aria-describedby="inputGroupPrepend"
        required
        onChange={props.onChange}
      />
      <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
);

export default RateField;
