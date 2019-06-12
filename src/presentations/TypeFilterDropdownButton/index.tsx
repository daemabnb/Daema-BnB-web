import React, { FC, useReducer, useCallback } from 'react';
import { DropdownButton } from '..';
import * as S from './styles';

interface TypeFilterDropdownButtonProps {
  onApply: (value: null | '공용' | '개인') => void;
}

interface TypeFilterDropdownButtonState {
  type: null | '공용' | '개인';
}

type ActionType = {
  type: 'set personal' | 'set public';
};

const reducer = (
  state: TypeFilterDropdownButtonState,
  action: ActionType,
): TypeFilterDropdownButtonState => {
  switch (action.type) {
    case 'set personal':
      return { type: '개인' };
    case 'set public':
      return { type: '공용' };
  }
};

export const TypeFilterDropdownButton: FC<TypeFilterDropdownButtonProps> = ({
  onApply,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: null,
  });

  const handleClickPersonal = useCallback(() => {
    dispatch({ type: 'set personal' });
  },                                      []);
  const handleClickPublic = useCallback(() => {
    dispatch({ type: 'set public' });
  },                                    []);

  return (
    <DropdownButton
      buttonText={state.type || '종류'}
      onClose={onApply.bind(undefined, state.type)}
    >
      <S.TypeButton
        onClick={handleClickPersonal}
        isSelected={state.type === '개인'}
      >
        개인
      </S.TypeButton>
      <S.TypeButton
        onClick={handleClickPublic}
        isSelected={state.type === '공용'}
      >
        공용
      </S.TypeButton>
    </DropdownButton>
  );
};
