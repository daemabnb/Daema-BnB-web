import React, { Component } from 'react';
import * as S from './styles';

interface DropdownButtonProps {
  buttonText: string;
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
    const { buttonText, children } = this.props;
    const { isActive } = this.state;

    return (
      <S.DropdownButtonCover isActive={isActive}>
        <S.DropdownButton onClick={this.handleClickButton}>
          {buttonText}
        </S.DropdownButton>
        <S.Dropdown>{children}</S.Dropdown>
      </S.DropdownButtonCover>
    );
  }
}
