import React from 'react';

import * as S from './styles';

interface Props {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export const LabeledCheckbox: React.FC<Props> = ({
  isChecked,
  onChange,
  label = '',
}) => {
  const toggleCheckboxChange = onChange.bind(null, !isChecked);
  return (
    <S.LabeledCheckbox>
      <S.Checkbox onChange={toggleCheckboxChange} checked={isChecked} />
      <S.Label>{label}</S.Label>
    </S.LabeledCheckbox>
  );
};
