import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/Members";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
