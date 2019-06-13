import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Signup, Signin } from './pages';
import { createGlobalStyle } from 'styled-components';

interface Props {}

interface State {}

const history = createBrowserHistory();
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router history={history}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
