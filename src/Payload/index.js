import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import CardComponent from "../Card";

class PayloadClass extends React.Component {
  state = {};
  componentDidMount() {
    axios
      .get(
        `https://api.spacexdata.com/v3/payloads/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ payloadData: res.data });
      })
      .catch(function(error) {
        alert("Cannot See PayLod now, due to some technical issues");
      });
  }
  render() {
    return (
      <Container style={{ marginTop: "2%" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <CardComponent id={1} name={this.props.match.params.id}>
              {this.state.payloadData ? (
                <React.Fragment>
                  <table>
                    <tbody>
                      <tr>
                        <td>Type</td>
                        <td>{this.state.payloadData.payload_type}</td>
                      </tr>
                      <tr>
                        <td>Manufacturer</td>
                        <td>{this.state.payloadData.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Nationality</td>
                        <td>{this.state.payloadData.nationality}</td>
                      </tr>
                      <tr>
                        <td>Customers</td>
                        <td>
                          {!!this.state.payloadData.customers &&
                          this.state.payloadData.customers.length
                            ? this.state.payloadData.customers.join(", ")
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Norad Id</td>
                        <td>
                          {!!this.state.payloadData.norad_id &&
                          this.state.payloadData.norad_id.length
                            ? this.state.payloadData.norad_id.join(", ")
                            : ""}
                        </td>
                      </tr>
                      <tr>
                        <td>Orbit</td>
                        <td>{this.state.payloadData.orbit}</td>
                      </tr>
                      <tr>
                        <td>Payload Mass Kg</td>
                        <td>{this.state.payloadData.payload_mass_kg}</td>
                      </tr>
                      <tr>
                        <td>Payload Mass lbs</td>
                        <td>{this.state.payloadData.payload_mass_lbs}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    className="card-small-title m-tb-25 "
                    style={{ margin: "5% 0", fontSize: "1.2rem" }}
                  >
                    Orbit params
                  </div>
                  <table>
                    <tbody>
                      {this.state.payloadData.orbit_params
                        ? Object.keys(this.state.payloadData.orbit_params).map(
                            (key, index) => (
                              <tr key={index}>
                                <td>
                                  {(key.charAt(0).toUpperCase() + key.slice(1))
                                    .split("_")
                                    .join(" ")}
                                </td>
                                <td>
                                  {this.state.payloadData.orbit_params[key]}
                                </td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                </React.Fragment>
              ) : (
                "Loading"
              )}
            </CardComponent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PayloadClass;
