import React, { Component } from 'react';
import * as S from './styles';
import { LabeledNumberInputOnChange } from '..';

export interface LabeledPriceInputProps {
  onChange: LabeledNumberInputOnChange;
  value: number;
  label?: string;
  placeholder?: string;
}

export class LabeledPriceInput extends Component<LabeledPriceInputProps> {
  render() {
    const { onChange, value, label, placeholder } = this.props;

    return (
      <S.LabeledPriceInputWrapper>
        <S.LabeledPriceInput
          onChange={onChange}
          value={value}
          label={label}
          placeholder={placeholder}
        />
        <S.CurrencyMark>￦</S.CurrencyMark>
      </S.LabeledPriceInputWrapper>
    );
  }
}
