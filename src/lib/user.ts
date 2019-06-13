import axios from 'axios';
import basedApi from './basedApi';

export const authMail = (email: string, token: string) =>
  basedApi.post(
    'authemail',
    {
      email,
    },
    {
      headers: {
        token,
      },
    },
  );

export const signup = (email: string, authNum: string, token: string) =>
  basedApi.post(
    'signup',
    {
      email,
      authNum,
    },
    {
      headers: {
        token,
      },
    },
  );

interface SigninResponse {
  isAdmin: boolean;
  token: string;
}
export const signin = (token: string) =>
  basedApi.post<SigninResponse>('signin/facebook', { accessToken: token });
