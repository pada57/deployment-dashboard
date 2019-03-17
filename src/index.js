import React from 'react';
import ReactDOM from 'react-dom';

// TODO use webpack
// import App from './containers';
import  App  from './containers/App/App';
import * as serviceWorker from './utils/serviceWorker';

import './assets/css/index.css';

ReactDOM.render(<App logoText="Pictet Technologies" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
