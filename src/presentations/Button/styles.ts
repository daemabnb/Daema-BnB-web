import styled from 'styled-components';

interface ButtonProps {
  btnColor: string;
  size: 'big' | 'small';
}

export const Button = styled.div`
  min-width: 112px;
  box-sizing: border-box;
  border-radius: 4px;
  display: ${(props: ButtonProps) =>
    props.size === 'big' ? 'block' : 'inline-block'};
  padding: 10px 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  background-color: ${(props: ButtonProps) => props.btnColor};
`;
