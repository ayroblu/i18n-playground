import React from "react";
import { Direction } from "./Direction";
import { Ideas } from "./Ideas";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const AppRoute = {
  Direction: "/",
  Ideas: "/ideas",
} as const;

function App() {
  return (
    <Router>
      <Link to={AppRoute.Direction}>Direction</Link>
      <Link to={AppRoute.Ideas}>Ideas</Link>
      <Switch>
        <Route path={AppRoute.Ideas}>
          <Ideas />
        </Route>
        <Route path={AppRoute.Direction}>
          <Direction />
        </Route>
        <Redirect to={AppRoute.Direction} />
      </Switch>
    </Router>
  );
}

export default App;
