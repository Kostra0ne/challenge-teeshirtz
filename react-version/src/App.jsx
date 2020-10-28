import React from "react";
import { Switch, Route } from "react-router-dom";
import HeaderMain from "./components/layout/HeaderMain";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";

import "./styles/app.css";

function App() {
  return (
    <div id="app">
      <HeaderMain />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
