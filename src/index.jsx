import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { HomePage, NotFoundPage, AddTipPage, DataPrivacyPage, HallOfFamePage, ImprintPage, MotivationPage } from './pages';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tipp-adden" component={AddTipPage} />
      <Route path="/datenschutz" component={DataPrivacyPage} />
      <Route path="/hall-of-fame" component={HallOfFamePage} />
      <Route path="/impressum" component={ImprintPage} />
      <Route path="/motivation" component={MotivationPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
