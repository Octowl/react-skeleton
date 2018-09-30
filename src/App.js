import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Stylesheets
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/common/NotFound";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <PrivateRoute exact path="/" component={NotFound} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
