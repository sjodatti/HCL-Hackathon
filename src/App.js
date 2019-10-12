import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import AccountSummary from './components/accountSummary';
import TransferFunds from './components/transferFunds';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/accountSummary">
            <AccountSummary />
          </Route>
          <Route path="/transferFunds">
            <TransferFunds />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
