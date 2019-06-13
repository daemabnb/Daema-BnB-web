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
  type: 'set personal' | 'set public' | 'reset';
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
    case 'reset':
      return { type: null };
  }
};

export const TypeFilterDropdownButton: FC<TypeFilterDropdownButtonProps> = ({
  onApply,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: null,
  });

  const handleClickPersonal = useCallback(() => {
    if (state.type === '개인') dispatch({ type: 'reset' });
    else dispatch({ type: 'set personal' });
  },                                      [state]);
  const handleClickPublic = useCallback(() => {
    if (state.type === '공용') dispatch({ type: 'reset' });
    else dispatch({ type: 'set public' });
  },                                    [state]);

  return (
    <DropdownButton
      defaultButtonText="종류"
      value={state.type}
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
