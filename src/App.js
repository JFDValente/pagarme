import React from "react";
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

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
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}
