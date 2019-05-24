import styled from 'styled-components';

export const LabeledDescriptionInput = styled.div`
  margin-top: 12px;
`;

export const Label = styled.div`
  color: #484848;
  font-size: 16px;
  font-weight: 600;
`;

export const LabelDescription = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: #484848;
`;

export const DescriptionInput = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  padding: 11px;
  font-size: 16px;
  transition: border-color 0.2s;
  color: #484848;
  resize: vertical;

  &:placeholder {
    color: #767676;
  }
  &:focus {
    border-color: rgb(0, 132, 137);
    outline: none;
  }
`;
