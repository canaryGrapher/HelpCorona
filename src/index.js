import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';
import App from './App'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.initialize("UA-148968911-1");
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
