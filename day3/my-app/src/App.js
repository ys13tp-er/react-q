import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link, Redirect, NavLink, MemoryRouter } from "react-router-dom";
// 路由组件
import Home from './views/Home/Home'
import Mine from './views/Mine/Mine'
import Topic from './views/Topic/Topic'
// store
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Switch>
          <Router>
            <Link to="/">Home</Link>
            <NavLink activeClassName="selected" to={{
              pathname: "/mine/999",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}>Mine</NavLink>
            <Link to="/topic">Topic</Link>

            <div className="App">
              <Route path="/" exact component={Home} />
              <Route path="/mine/:id" component={Mine} />
              <Route path="/topic" component={Topic}></Route>
            </div>

          </Router>
        </Switch>
        <Switch>
          <Redirect
            to={{
              pathname: "/topic/b",
            }}
          />
        </Switch>
      </MemoryRouter>
    </Provider>
  );
}


export default App;
