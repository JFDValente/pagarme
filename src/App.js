import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import List from './pages/List';
import Create from './pages/Create';

import Style from './App.style';

export default function App() {
  return (
    <Router>
      <Style.GlobalStyles />
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}
