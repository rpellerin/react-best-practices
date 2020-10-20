import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import KeyProp from "./key-prop/index";
import CallingFunction from "./calling-function/index";
import Context from "./context/index";
import DefiningComponentOnTheGo from "./defining-component-on-the-go/index";

const linkStyle = {
  display: "inline-block",
  padding: "10px",
  margin: "5px",
  backgroundColor: "#ddd",
  borderRadius: "5px",
};

const App = () => (
  <Router>
    <nav>
      <Link style={linkStyle} to="/key-prop">
        The `key` prop
      </Link>
      <Link style={linkStyle} to="/calling-function">
        Calling a function vs mounting a component
      </Link>
      <Link style={linkStyle} to="/context">
        React context
      </Link>
      <Link style={linkStyle} to="/defining-component-on-the-go">
        Defining component on the go
      </Link>
    </nav>
    <Switch>
      <Route path="/key-prop">
        <KeyProp />
      </Route>
      <Route path="/calling-function">
        <CallingFunction />
      </Route>
      <Route path="/context">
        <Context />
      </Route>
      <Route path="/defining-component-on-the-go">
        <DefiningComponentOnTheGo />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
