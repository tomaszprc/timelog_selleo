import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/app.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Timer from "./pages/Timer/Timer";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/Projects/ProjectPage/ProjectPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
