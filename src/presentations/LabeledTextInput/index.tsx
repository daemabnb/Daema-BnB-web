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
  disabled?: boolean;
}

export class LabeledTextInput extends Component<LabeledTextInputProps> {
  private handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { className, value, label, placeholder, type, disabled = false } = this.props;
    const Label = label && <S.Label>{label}</S.Label>;
    return (
      <S.LabeledTextInput>
        {Label}
        <S.TextInput
          className={className}
          onChange={this.handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
      </S.LabeledTextInput>
    );
  }
}
