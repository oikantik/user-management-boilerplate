import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/Members";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
