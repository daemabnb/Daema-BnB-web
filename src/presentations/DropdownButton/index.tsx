import React, { Component } from 'react';
import * as S from './styles';

interface DropdownButtonProps {
  defaultButtonText: string;
  value: string | null;
  onClose: () => void;
}

interface DropdownButtonState {
  isActive: boolean;
}

export class DropdownButton extends Component<
  DropdownButtonProps,
  DropdownButtonState
> {
  constructor(props: DropdownButtonProps) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  private handleClickButton = () => {
    const { isActive } = this.state;
    if (isActive) {
      this.props.onClose();
    }
    this.setState({ isActive: !isActive });
  }

  render() {
    const { value, defaultButtonText, children } = this.props;
    const { isActive } = this.state;

    return (
      <S.DropdownButtonCover isActive={isActive}>
        <S.DropdownButton
          onClick={this.handleClickButton}
          hasValue={value !== null}
          isActive={isActive}
        >
          {value || defaultButtonText}
        </S.DropdownButton>
        <S.Dropdown>{children}</S.Dropdown>
      </S.DropdownButtonCover>
    );
  }
}
