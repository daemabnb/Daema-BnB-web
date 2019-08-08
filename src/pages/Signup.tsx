import React, { useState } from 'react';
import { EmailChecker, LabeledTextInput, Button } from '../presentations';
import { authMail, signup } from '../lib/user';
import { getToken } from '../lib';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {}

export const Signup: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState('');
  const [emailSended, setEmailSended] = useState(false);
  const token = getToken();
  const routeToMain = () => {
    history.push('/');
  };
  const onNeedLogin = () => {
    alert('facebook 로그인이 필요합니다.');
    history.push('/signin');
  };
  if (!token) {
    onNeedLogin();
  }
  const onAuthEmail = async () => {
    if (token) {
      try {
        const { status } = await authMail(email, token);
        if (status === 201) {
          setEmailSended(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const onSignup = async () => {
    if (token) {
      try {
        const { status } = await signup(email, validation, token);
        if (status === 201) {
          routeToMain();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div>
      <EmailChecker
        disabled={emailSended}
        email={email}
        onChangeEmail={setEmail}
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
