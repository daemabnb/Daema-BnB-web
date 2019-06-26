import React from 'react';

import * as S from './styles';

interface Props {
  disabled?: boolean;
  content?: string;
  size?: 'big' | 'small';
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  disabled = false,
  content = '',
  onClick,
  size = 'small',
}) => {
  return (
    <S.Button
      onClick={disabled ? undefined : onClick}
      size={size}
      disabled={disabled}
    >
      {content}
    </S.Button>
  );
};
