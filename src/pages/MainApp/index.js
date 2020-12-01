import React from "react";
import { Footer, Header } from "../../components/moleculs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./mainApp.scss";
import Home from "../Home";
import About from "../About";

function MainApp() {
  return (
    <Router>
      <div className="main-app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about-page">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default MainApp;
