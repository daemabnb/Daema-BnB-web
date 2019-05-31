import React, { FC } from 'react';
import { DropdownButton } from '..';
import * as S from './styles';

type valueType = '공용' | '개인';

interface TypeFilterDropdownButtonProps {
  onChange: (value: valueType) => void;
  value?: valueType;
  onApply: () => void;
}

export const TypeFilterDropdownButton: FC<TypeFilterDropdownButtonProps> = ({
  onChange,
  value = '종류',
  onApply,
}) => {
  return (
    <DropdownButton buttonText={value} onClose={onApply}>
      <S.TypeButton
        onClick={onChange.bind(null, '개인')}
        isSelected={value === '개인'}
      >
        개인
      </S.TypeButton>
      <S.TypeButton
        onClick={onChange.bind(null, '공용')}
        isSelected={value === '공용'}
      >
        공용
      </S.TypeButton>
    </DropdownButton>
  );
};
