import axios from 'axios';

const baseUrl = 'https://52.79.121.254/user';

export const authMail = (email: string) =>
  axios.post(`${baseUrl}/authmail`, {
    email,
  });

export const signup = (email: string, authNum: string) =>
  axios.post(`${baseUrl}/signup`, {
    email,
    authNum,
  });

export const signin = (token: string) =>
  axios.post(`${baseUrl}/signin/facebook`, { accessToken: token });
