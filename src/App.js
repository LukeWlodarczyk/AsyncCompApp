import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import asyncComponent from "./hoc/asyncComponent";
import Header from "./components/Header";

const AsyncHome = asyncComponent({
  importComponent: () => import("./components/Home"),
  loader: () => "Loading",
  errorFallback: () => "Error",
  timeWithoutLoader: 400
});

const AsyncHello = asyncComponent({
  importComponent: () => import("./components/Hello"),
  loader: () => "Loading",
  errorFallback: () => "Error",
  timeWithoutLoader: 400
});

const AsyncWorld = asyncComponent({
  importComponent: () => import("./components/World"),
  loader: () => "Loading",
  errorFallback: () => "Error",
  timeWithoutLoader: 500
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={AsyncHome} />
          <Route path="/hello" exact component={AsyncHello} />
          <Route path="/world" exact component={AsyncWorld} />
        </div>
      </Router>
    );
  }
}

export default App;
