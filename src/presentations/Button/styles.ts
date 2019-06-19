import styled, { css } from 'styled-components';

interface ButtonProps {
  size: 'big' | 'small';
  disabled: boolean;
}

export const Button = styled.div`
  min-width: 112px;
  box-sizing: border-box;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 12px;
  word-break: keep-all;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  ${(props: ButtonProps) => css`
    background: ${props.disabled ? '#006468' : '#008489'}
    display: ${props.size === 'big' ? 'flex' : 'inline-flex'}
    width: ${props.size === 'big' && '100%'}
  `}
`;
