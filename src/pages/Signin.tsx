import React from 'react';

import FacebookLogin from 'react-facebook-login';
// import { signin } from '../lib/user';

interface Props {
}

export const Signin: React.FC = () => {
  const responseFacebook = (response: any) => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="856575621215696"
        autoLoad={true}
        callback={responseFacebook}
      />
    </div>
  );
};
