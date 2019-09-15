import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
// import MinePage from './routes/MinePage/MinePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
        {/* <Route path="/mine" exact component={MinePage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
