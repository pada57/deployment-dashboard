import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// TODO use webpack
// import App from './containers';
import  App  from './_layouts/App';
import * as serviceWorker from './utils/serviceWorker';

import './assets/css/index.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/dashboard" component={() => <App logoText="Pictet Technologies" />}  />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
