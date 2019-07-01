import basedApi from './basedApi';

interface AuthMailResponse {
  email: string;
}
export const authMail = async (email: string, token: string) => {
  const { data, status } = await basedApi.post<AuthMailResponse>(
    'user/authemail',
    {
      email,
    },
    {
      headers: {
        token,
      },
    },
  );
  return { data, status };
};

interface SignupResponse {
  email: string;
  authNum: string;
}
export const signup = async (email: string, authNum: string, token: string) => {
  const { data, status } = await basedApi.post<SignupResponse>(
    'user/signup',
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
  return { data, status };
};

interface SigninResponse {
  isAdmin: boolean;
  token: string;
}
export const signin = async (token: string) => {
  const { data, status } = await basedApi.post<SigninResponse>(
    'user/signin/facebook',
    { accessToken: token },
  );
  return { data, status };
};
