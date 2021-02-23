import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Timer from "./pages/Timer/Timer";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/Projects/ProjectPage/ProjectPage";

ReactDOM.render(
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:id" component={ProjectPage} />
        <Route path="/timer" component={Timer} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
