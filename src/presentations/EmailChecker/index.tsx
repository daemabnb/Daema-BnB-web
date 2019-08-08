import React from 'react';

import { LabeledTextInput, Button } from '../';
import * as S from './styles';

interface Props {
  disabled?: boolean;
  email: string;
  onChangeEmail: (email: string) => void;
  onCheck: () => void;
}

export const EmailChecker: React.FC<Props> = ({
  email,
  onChangeEmail,
  onCheck,
  disabled = false,
}) => {
  return (
    <S.EmailChecker>
      <LabeledTextInput
        onChange={onChangeEmail}
        value={email}
        placeholder="이메일 주소"
        disabled={disabled}
      />
      <Button
        onClick={onCheck}
        content="인증번호 발송"
        size="small"
        disabled={disabled}
      />
    </S.EmailChecker>
  );
};
