import React from "react";
import { Switch, Route } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import axios from "axios";

import Mission from "../Mission";
import { Loader } from "../Extra/Spinner";
import LaunchpadPage from "../Launchpad";
import PayloadClass from "../Payload";
import Currency from "../Currency";

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
        this.setState({ launchData: res.data });
      })
      .catch(function(error) {
        alert("Cannot See launch pad now, due to some technical issues");
      });
  }

  render() {
    return (
      <Switch>
        <Route
          path="/currency"
          render={props => <Currency {...props}></Currency>}
        ></Route>
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
        {this.state.launchData ? (
          <Route
            path="/launchpad"
            render={props => (
              <LaunchpadPage
                {...props}
                launchData={this.state.launchData}
              ></LaunchpadPage>
            )}
          ></Route>
        ) : (
          <Loader></Loader>
        )}
        <Route
          path="/payload/:id?"
          render={props => <PayloadClass {...props}></PayloadClass>}
        ></Route>

        <Route path="/">
          <Jumbotron className="centerDivJumbo">
            <img
              src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"
              alt="Home"
              width="30%"
            ></img>
            <p
              style={{
                marginTop: "2%",
                fontFamily: "'Alatsi', sans-serif",
                marginLeft: "-3%"
              }}
            >
              Application that provides information about SpaceX resources
            </p>
          </Jumbotron>
        </Route>
      </Switch>
    );
  }
}

export default Space;
