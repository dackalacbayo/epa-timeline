import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
import Timeline from "./Timeline/Timeline";
import Routes from "./Timeline/Routes";
import EventSlider from "./Timeline/EventSlider";
import EventSlider2 from "./Timeline/EventSlider2";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { Route, IndexRoute } from "react-router";

const Routers = props => {
  console.log("proppps", props);
  return (
    <div>
      <Switch>
        <Route path="/" component={Timeline} exact={true} />
        <Route path="/event/:id" component={EventSlider} exact={true} />
        <Route path="/event2" component={EventSlider2} exact={true} />
      </Switch>
    </div>
  );
};

function App() {
  return (
    // <Router>
    //   <Route path="/" component={EventSlider  2} />
    //   <Route path="/react" component={EventSlider} />
    // </Router>

    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   {/* <Timeline /> */}
    // </div>
    <div>
      {/* <Timeline /> */}
      <BrowserRouter>
        <div>
          <Routers />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
