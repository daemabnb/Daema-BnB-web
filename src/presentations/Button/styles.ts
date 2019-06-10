import styled from 'styled-components';

interface ButtonProps {
  size: 'big' | 'small';
}

export const Button = styled.div`
  min-width: 112px;
  box-sizing: border-box;
  border-radius: 4px;
  display: ${(props: ButtonProps) =>
    props.size === 'big' ? 'flex' : 'inline-flex'};
  align-items: center;
  padding: 10px 8px;
  margin-top: 12px;
  word-break: keep-all;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  background-color: #008489;
`;
