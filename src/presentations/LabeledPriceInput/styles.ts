import styled from 'styled-components';
import { LabeledNumberInput } from '..';

export const LabeledPriceInputWrapper = styled.div`
  position: relative;
`;

export const LabeledPriceInput = styled(LabeledNumberInput)`
  text-align: right;
  padding-right: 34px;
`;

export const CurrencyMark = styled.div`
  position: absolute;
  font-size: 16px;
  bottom: 14px;
  right: 12px;
`;
