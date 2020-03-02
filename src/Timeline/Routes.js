import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventSlider2 from "./EventSlider2";

import React, { Component } from "react";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/aboutsss" component={EventSlider2} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
