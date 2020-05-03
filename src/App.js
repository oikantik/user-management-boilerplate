import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/Members";
import PrivateRoute from "./components/common/PrivateRoute";
import MyProfile from "./pages/MyProfile";
import CreateEvent from "./pages/Events/Create";
import ManageEvents from "./pages/Events/Manage";
import EditEvents from "./pages/Events/Edit";
import SignupPage from "./pages/Schedule/SignupPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/members">
            <Members />
          </PrivateRoute>
          <PrivateRoute exact path="/my-profile">
            <MyProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/edit-event">
            <EditEvents />
          </PrivateRoute>
          <PrivateRoute exact path="/create-event">
            <CreateEvent />
          </PrivateRoute>
          <PrivateRoute exact path="/manage-events">
            <ManageEvents />
          </PrivateRoute>
          <Route exact path="/schedule/:eventId" component={SignupPage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
