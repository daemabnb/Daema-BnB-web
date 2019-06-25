import React from 'react';
import { Signin } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as userActions } from '../store/modules/user';
import { bindActionCreators } from 'redux';
import { History } from 'history';

interface Props {
  UserActions: typeof userActions;
  history: History;
}

class SigninContainer extends React.Component<Props> {
  onChangeToken = (token: string) => {
    const { UserActions } = this.props;
    UserActions.changeToken(token);
  }
  onChangeIsAdmin = (isAdmin: boolean) => {
    const { UserActions } = this.props;
    UserActions.changeAdminState(isAdmin);
  }
  render() {
    return (
      <Signin
        history={this.props.history}
        changeToken={this.onChangeToken}
        changeIsAdmin={this.onChangeIsAdmin}
      />
    );
  }
}

export default connect(
  ({ user }: StoreState) => user,
  (dispatch: any) => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(SigninContainer);
