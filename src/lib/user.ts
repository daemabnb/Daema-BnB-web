import axios from 'axios';

const baseUrl = 'https://52.79.121.254/user';

export const authMail = (email: string, token: string) =>
  axios.post(
    `${baseUrl}/authemail`,
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
  axios.post(
    `${baseUrl}/signup`,
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

export const signin = (token: string) =>
  axios.post(`${baseUrl}/signin/facebook`, { accessToken: token });
