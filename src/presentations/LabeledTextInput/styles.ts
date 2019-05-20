import styled from 'styled-components';

export const LabeledTextInput = styled.div`
  margin-top: 12px;
`;

export const Label = styled.div`
  color: #484848;
  font-size: 19px;
  padding: 9px 0 8px;
`;

export const TextInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  padding: 20px;
  font-size: 16px;
  height: 63px;
  transition: border-color 0.2s;
  color: #484848;

  &:placeholder {
    color: #767676;
  }
  &:focus {
    border-color: rgb(0, 132, 137);
    outline: none;
  }
`;
