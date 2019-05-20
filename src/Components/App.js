import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Color from './Color';
import Red from './Red';

export default function App() {
  return (
    <Router>
        <>
        <Header />
        <Switch>
          <Route path ="/red" component={Red} />
          <Route path="/:color" component={Color} />
        </Switch>
        </>
    </Router>
  );
}


