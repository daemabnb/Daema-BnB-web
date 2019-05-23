import styled from 'styled-components';

export const LabeledCheckbox = styled.div`
  display: flex;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  height: 20px;
  width: 20px;
  margin: 0;
`;

export const Label = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: #767676;
`;
