import React from 'react';

import { LabeledTextInput, Button } from '../';
import * as S from './styles';

interface Props {
  email: string;
  onChange: (email: string) => void;
  onCheck: () => void;
}

export const EmailChecker: React.FC<Props> = ({ email, onChange, onCheck }) => {
  return (
    <S.EmailChecker>
      <LabeledTextInput
        onChange={onChange}
        value={email}
        placeholder="이메일 주소"
      />
      <Button onClick={onCheck} content="인증번호 발송" size="small" />
    </S.EmailChecker>
  );
};
