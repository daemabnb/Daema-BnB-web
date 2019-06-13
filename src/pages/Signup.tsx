import React, { useState } from 'react';

import { EmailChecker, LabeledTextInput, Button } from '../presentations';
import { authMail, signup } from '../lib/user';
import { getCookie } from '../utils';
import { History } from 'history';

interface Props {
  history: History;
}

export const Signup: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState('');
  const [emailSended, setEmailSended] = useState(false);
  const token = getCookie('token');
  const checkToken = () => {
    if (!token) {
      alert('facebook 로그인이 필요합니다.');
      history.push('/signin');
    }
  };
  checkToken();
  const onAuthEmail = () => {
    if (token) {
      authMail(email, token)
        .then(res => {
          setEmailSended(true);
        })
        .catch(e => {
          console.log(e);
        });
    }
    checkToken();
  };
  const onSignup = () => {
    if (token) {
      signup(email, validation, token)
        .then(res => {
          history.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    checkToken();
  };
  return (
    <div>
      <EmailChecker
        disabled={emailSended}
        email={email}
        onChange={setEmail}
        onCheck={onAuthEmail}
      />
      <LabeledTextInput
        value={validation}
        onChange={setValidation}
        placeholder="인증번호"
      />
      <Button content="가입하기" size="big" onClick={onSignup} />
    </div>
  );
};
