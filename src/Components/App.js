import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <Router>
        <>
        <Header />
        <Switch>
          <Route path="/:color" component={Color} />
        </Switch>
        </>
    </Router>
  );
}


