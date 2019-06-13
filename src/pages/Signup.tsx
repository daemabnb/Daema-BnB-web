import React, { useState } from 'react';

import { EmailChecker, LabeledTextInput, Button } from '../presentations';
import { History } from 'history';

interface Props {
  history: History;
}

export const Signup: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState('');
  return (
    <div>
      <EmailChecker
        email={email}
        onChange={setEmail}
        onCheck={() => {
          console.log(1);
        }}
      />
      <LabeledTextInput
        value={validation}
        onChange={setValidation}
        placeholder="인증번호"
      />
      <Button content="가입하기" size="big" />
    </div>
  );
};
