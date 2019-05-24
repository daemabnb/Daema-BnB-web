import React, { Component } from 'react';
import * as S from './styles';

export type LabeledTextInputOnChange = (value: string) => void;

export interface LabeledTextInputProps {
  onChange: LabeledTextInputOnChange;
  className?: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

export class LabeledTextInput extends Component<LabeledTextInputProps> {
  private handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { className, value, label, placeholder, type } = this.props;

    return (
      <S.LabeledTextInput>
        <S.Label>{label}</S.Label>
        <S.TextInput
          className={className}
          onChange={this.handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </S.LabeledTextInput>
    );
  }
}
