import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { signin } from '../../lib/user';
import { setLocalStorageItem } from '../../lib';
import * as S from './styles';
import { History } from 'history';

interface Props {
  history: History;
  changeToken(token: string): void;
  changeIsAdmin(isAdmin: boolean): void;
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
  history,
  changeToken,
  changeIsAdmin,
}) => {
  const responseFacebook = (response: FacebookLoginResponse) => {
    signin(response.accessToken)
      .then(res => {
        if (res.status === 201) {
          setLocalStorageItem('token', res.data.token);
          history.push('/signup');
        } else if (res.status === 200) {
          setLocalStorageItem('token', res.data.token);
          changeToken(res.data.token);
          changeIsAdmin(res.data.isAdmin);
          history.push('/');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  const appId: string = process.env.REACT_APP_FACEBOOK_APP_ID || '';

  return (
    <S.Signin>
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        callback={responseFacebook}
      />
    </S.Signin>
  );
};
