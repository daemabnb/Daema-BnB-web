import React from 'react';

import * as S from './styles';

interface Props {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent) => void;
  label?: string;
}

export const LabeledCheckbox: React.FC<Props> = ({
  isChecked,
  onChange,
  label = '',
}) => {
  return (
    <S.LabeledCheckbox>
      <S.Checkbox onChange={onChange} checked={isChecked} />
      <S.Label>{label}</S.Label>
    </S.LabeledCheckbox>
  );
};
