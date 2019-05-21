import React from 'react';

import * as S from './styles';

interface Props {
  content?: string;
  color?: string;
  size?: 'big' | 'small';
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  content = '',
  color = '#914669',
  onClick,
  size = 'small',
}) => {
  return (
    <S.Button onClick={onClick} btnColor={color} size={size}>
      {content}
    </S.Button>
  );
};
