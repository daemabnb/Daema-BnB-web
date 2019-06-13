import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Signup, Signin } from './pages';

interface Props {}

interface State {
}

const history = createBrowserHistory();

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
