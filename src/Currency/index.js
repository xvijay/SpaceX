import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponent from "../Card";
import RateField from "./rateField";
import InrField from "./inrField";
import USDField from "./usdField";

class Currency extends React.Component {
  state = {
    rate: 0,
    inr: 0,
    usd: 0
  };
  onChange = e => {
    let inr = this.state.inr;
    let rate = this.state.rate;
    let usd = this.state.usd;
    let newInr = 0,
      newUsd = 0;
    switch (e.target.id) {
      case "inr":
        inr = e.target.value;
        break;
      case "usd":
        usd = e.target.value;
        break;

      case "rate":
        rate = e.target.value;
        break;
      default:
        break;
    }

    switch (e.target.id) {
      case "usd":
        newInr = usd * rate;
        newUsd = usd;
        break;
      case "inr":
        newInr = inr;
        newUsd = inr / rate;
        break;
      default:
        break;
    }
    console.log(rate, e.target.value, e.target.id);

    this.setState({
      rate,
      inr: newInr,
      usd: newUsd
    });
  };
  render() {
    let { rate, inr, usd } = this.state;
    return (
      <Container style={{ marginTop: "2%" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <CardComponent id={1} name={"Currency Converter"}>
              <RateField onChange={this.onChange} value={rate}></RateField>
              <InrField onChange={this.onChange} value={inr}></InrField>
              <USDField onChange={this.onChange} value={usd}></USDField>
            </CardComponent>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Currency;
