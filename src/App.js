import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import List from './pages/List';

import Style from './App.style';

export default function App() {
  return (
    <Router>
      <Style.GlobalStyles />
      <Switch>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}
