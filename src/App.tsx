import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { Signup, Signin } from './pages';

import {
  RegisterShareItemInfoContainer,
  RegisterShareItemPeriodContainer,
} from './containers';

interface Props {}

interface State {}

const history = createBrowserHistory();
const GlobalStyle = createGlobalStyle`
  div, input {
    box-sizing: border-box;
  }
`;
const store = configureStore();

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route
              exact
              path="/register/share/item"
              component={RegisterShareItemInfoContainer}
            />
            <Route
              exact
              path="/register/share/period"
              component={RegisterShareItemPeriodContainer}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
