import React from 'react';

import * as S from './styles';

interface Props {
  content?: string;
  size?: 'big' | 'small';
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  content = '',
  onClick,
  size = 'small',
}) => {
  return (
    <S.Button onClick={onClick} size={size}>
      {content}
    </S.Button>
  );
};
