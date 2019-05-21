import React, { Component } from 'react';
import * as S from './styles';

export type LabeledDescriptionInputOnChange = (value: string) => void;

export interface LabeledDescriptionInputProps {
  onChange: LabeledDescriptionInputOnChange;
  className?: string;
  value: string;
  label?: string;
  labelDescription?: string;
  placeholder?: string;
}

export class LabeledDescriptionInput extends Component<
  LabeledDescriptionInputProps
> {
  private handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      className,
      value,
      label,
      labelDescription,
      placeholder,
    } = this.props;

    return (
      <S.LabeledDescriptionInput>
        <S.Label>{label}</S.Label>
        <S.LabelDescription>{labelDescription}</S.LabelDescription>
        <S.DescriptionInput
          className={className}
          onChange={this.handleChange}
          value={value}
          placeholder={placeholder}
        />
      </S.LabeledDescriptionInput>
    );
  }
}
