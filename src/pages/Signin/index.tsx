import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { signin } from '../../lib/user';
import { setToken } from '../../lib';
import * as S from './styles';
import { UserActionCreators } from '../../store/modules/user';

interface Props extends UserActionCreators {
  routeToMain(): void;
  routeToSignup(): void;
}

interface FacebookLoginResponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  id: string;
  name: string;
  reauthorize_required_in: number;
  signedRequest: string;
  userID: string;
}

export const Signin: React.FC<Props> = ({
  changeToken,
  changeAdminState,
  routeToMain,
  routeToSignup,
}) => {
  const onFacebookLogin = async ({ accessToken }: FacebookLoginResponse) => {
    try {
      const { status, data } = await signin(accessToken);
      if (status === 201) {
        setToken(data.token);
        routeToSignup();
      } else if (status === 200) {
        setToken(data.token);
        changeToken(data.token);
        changeAdminState(data.isAdmin);
        routeToMain();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const appId: string = process.env.REACT_APP_FACEBOOK_APP_ID || '';

  return (
    <S.Signin>
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        callback={onFacebookLogin}
      />
    </S.Signin>
  );
};
