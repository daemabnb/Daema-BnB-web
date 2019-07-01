import React from 'react';
import { Signin } from '../pages';
import { connect } from 'react-redux';
import {
  UserActionCreators,
  actionCreators as userActions,
} from '../store/modules/user';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps, UserActionCreators {}

class SigninContainer extends React.Component<Props> {
  routeToMain = () => {
    this.props.history.push('/');
  }
  routeToSignup = () => {
    this.props.history.push('/signup');
  }
  render() {
    return (
      <Signin
        {...this.props}
        routeToMain={this.routeToMain}
        routeToSignup={this.routeToSignup}
      />
    );
  }
}

export default connect(
  null,
  userActions,
)(SigninContainer);
