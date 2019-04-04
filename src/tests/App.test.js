import React from 'react';
import ReactDOM from 'react-dom';
import App from '../_layouts/App';

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Router history={hist}>
        <Switch>
          <Route path="/App" component={() => <App logoText="Pictet Technologies" />}  />
          <Redirect from="/" to="/App" />
        </Switch>
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});