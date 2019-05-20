import styled from 'styled-components';

export const LabeledTextInput = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Label = styled.div`
  color: #484848;
  font-size: 12px;
  font-weight: 800;
`;

export const TextInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  padding: 0 4px 0 12px;
  margin-top: 8px;
  font-size: 14px;
  height: 48px;

  &:placeholder {
    color: #767676;
  }
`;
