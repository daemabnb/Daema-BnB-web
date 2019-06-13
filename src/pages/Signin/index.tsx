import React from 'react';

import FacebookLogin from 'react-facebook-login';
import { signin } from '../../lib/user';
import { setCookie } from '../../utils';
import * as S from './styles';
import { History } from 'history';

interface Props {
  history: History;
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

export const Signin: React.FC<Props> = ({ history }) => {
  const responseFacebook = (response: FacebookLoginResponse) => {
    try {
      signin(response.accessToken).then(res => {
        setCookie({ name: 'token', value: res.data.token }, 1);
        if (res.status === 201) {
          history.push('/signup');
        } else {
          history.push('/');
        }
      });
    } catch (e) {
      alert('로그인할 수 없습니다.');
    }
  };

  return (
    <S.Signin>
      <FacebookLogin
        appId="856575621215696"
        autoLoad={false}
        callback={responseFacebook}
      />
    </S.Signin>
  );
};
