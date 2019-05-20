import React, { Component } from 'react';
import { LabeledTextInput } from '..';

export type LabeledNumberInputOnChange = (value: number) => void;

export interface LabeledNumberInputProps {
  onChange: LabeledNumberInputOnChange;
  value: number;
  label?: string;
  placeholder?: string;
}

export class LabeledNumberInput extends Component<LabeledNumberInputProps> {
  private handleChange = (value: string) => {
    const { onChange, value: currentValue } = this.props;
    const parsedValue = Number(value);
    onChange(isNaN(parsedValue) ? currentValue : parsedValue);
  }

  render() {
    const { value, label, placeholder } = this.props;

    return (
      <LabeledTextInput
        onChange={this.handleChange}
        value={value.toString()}
        label={label}
        placeholder={placeholder}
      />
    );
  }
}
