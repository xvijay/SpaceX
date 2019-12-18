import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Badge,
  Form
} from "react-bootstrap";

class LaunchpadPage extends React.Component {
  state = {
    allStatus: [],
    selectStatus: ""
  };
  componentDidMount() {
    this.setState({
      allStatus: [...new Set(this.props.launchData.map(item => item.status))],
      launchData: this.props.launchData
    });
  }
  updateContent = e => {
    let selectStatus = e.target.value;
    let data = [...this.props.launchData];
    if (selectStatus !== "0") {
      data = data.filter(item => item.status === selectStatus);
    }
    this.setState({ launchData: data });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="3">
                <span style={{ color: "white" }}>Select Status</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select" onChange={e => this.updateContent(e)}>
                  {this.props.launchData ? (
                    this.state.allStatus.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))
                  ) : (
                    <option>...</option>
                  )}
                  <option key={0} value={0}>
                    All
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>
        </Row>
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
                              <span style={{ fontWeight: "bold" }}>Regin:</span>{" "}
                              {item.location.region}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <span style={{ fontWeight: "bold" }}>
                                Coordinates:
                              </span>{" "}
                              {item.location.latitude}/{item.location.longitude}
                            </ListGroup.Item>
                            {/* <ListGroup.Item></ListGroup.Item> */}
                          </ListGroup>
                          <p style={{ fontSize: "0.9rem", marginTop: "10%" }}>
                            {" "}
                            {item.details}{" "}
                          </p>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        ) : null}
      </React.Fragment>
    );
  }
}

export default LaunchpadPage;
