import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { signin } from '../../lib/user';
import { setSessionStorage } from '../../lib';
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
    signin(response.accessToken).then(res => {
      setSessionStorage('token', res.data.token);
      if (res.status === 201) {
        history.push('/signup');
      } else {
        history.push('/');
      }
    })
    .catch(e => {
      if (e.response.status === 405) {
        alert('로그인에 실패했습니다.');
      }
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
