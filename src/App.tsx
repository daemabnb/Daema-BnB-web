import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Signup, Signin } from './containers';

interface Props {}

interface State {
}

const history = createBrowserHistory();

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
