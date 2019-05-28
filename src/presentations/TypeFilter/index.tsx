import React, { Component } from 'react';

import * as S from './styles';

interface TypeFilterProps {
  isActive: boolean;
  value?: string;
  contentItems: string[];
  onSelectType: (value: string) => void;
  onToggleFilter: (value: boolean) => void;
}

interface TypeFilterState {}

export class TypeFilter extends Component<TypeFilterProps, TypeFilterState> {
  render() {
    const {
      isActive,
      value = '타입',
      contentItems,
      onSelectType,
      onToggleFilter,
    } = this.props;
    const isSelected = value !== '타입';
    const dropdownItems = contentItems.map((content, i) => (
      <S.DropdownItem key={i} onClick={onSelectType.bind(null, content)}>
        {content}
      </S.DropdownItem>
    ));
    const onClick = onToggleFilter.bind(null, !isActive);
    return (
      <S.TypeFilter onClick={onClick}>
        <S.Dropdownbtn isSelected={isSelected}>{value}</S.Dropdownbtn>
        <S.DropdownContainer isActive={isActive}>
          {dropdownItems}
        </S.DropdownContainer>
      </S.TypeFilter>
    );
  }
}
