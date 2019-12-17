import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Card, Row, Col, ListGroup, Badge } from "react-bootstrap";

import axios from "axios";

import Mission from "../Mission";
import { Loader } from "../Extra/Spinner";

class Space extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // let thisSTATE = this.state.data;

    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(res => {
        this.setState({ missionData: res.data });
      })
      .catch(function(error) {
        alert("Cannot See Mission now, due to some technical issues");
      });

    axios
      .get("https://api.spacexdata.com/v3/launchpads")
      .then(res => {
        console.log(res);
        this.setState({ launchData: res.data });
      })
      .catch(function(error) {
        alert("Cannot See launch pad now, due to some technical issues");
      });
  }

  render() {
    return (
      <Switch>
        {this.state.missionData ? (
          <Route
            path="/mission"
            render={props => (
              <Mission {...props} data={this.state.missionData}></Mission>
            )}
          ></Route>
        ) : (
          <Loader></Loader>
        )}
        <Route path="/launchpad">
          {this.state.launchData ? (
            <Container style={{ marginTop: "2%" }}>
              <Row>
                {this.state.launchData.map((item, index) => {
                  return (
                    <Col xs={12} md={4} s={6} l={4} key={index}>
                      <Card key={item.id}>
                        <Card.Header>
                          <Badge
                            pill
                            variant={
                              item.status === "active"
                                ? "success"
                                : item.status === "retired"
                                ? "info"
                                : item.status === "under construction"
                                ? "warning"
                                : "danger"
                            }
                            style={{ float: "left", color: "transparent" }}
                          >
                            .
                          </Badge>
                          {item.site_id}
                        </Card.Header>
                        <Card.Body id="style-1">
                          <blockquote className="blockquote mb-0">
                            {/* <p style={{ fontSize: "0.9rem" }}> */}
                            <ListGroup variant="flush">
                              <ListGroup.Item>
                                <span style={{ fontWeight: "bold" }}>
                                  Location:
                                </span>{" "}
                                {item.location.name}
                              </ListGroup.Item>
                              <ListGroup.Item>
                                <span style={{ fontWeight: "bold" }}>
                                  Regin:
                                </span>{" "}
                                {item.location.region}
                              </ListGroup.Item>
                              <ListGroup.Item>
                                <span style={{ fontWeight: "bold" }}>
                                  Coordinates:
                                </span>{" "}
                                {item.location.latitude}/
                                {item.location.longitude}
                              </ListGroup.Item>
                              {/* <ListGroup.Item></ListGroup.Item> */}
                            </ListGroup>
                            <p style={{ fontSize: "0.9rem", marginTop: "10%" }}>
                              {" "}
                              {item.details}{" "}
                            </p>
                            {/* </p> */}

                            {/* {item.payload_ids.map((element, index) => (
                              <footer className="blockquote-footer" key={index}>
                                <cite title="Source Title">
                                  <Link to={`/payload/${element}`}>
                                    {element}
                                  </Link>
                                </cite>
                              </footer>
                            ))} */}
                          </blockquote>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          ) : null}
        </Route>
        <Route path="/"></Route>
      </Switch>
    );
  }
}

export default Space;
