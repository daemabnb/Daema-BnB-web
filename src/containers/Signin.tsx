import React from 'react';

import { Button } from '../presentations';
import { signin } from '../lib/user';

interface Props {
}

export const Signin: React.FC = () => {
  const onSignin = async () => {
    const response = await signin();
    console.log(response.data.token);
  }
  return (
    <div>
      <Button content="Login with Facebook" size="big" onClick={onSignin} />
    </div>
  );
};
