import styled from 'styled-components';

export const DetailViewHeader = styled.div`
  display: flex;
  flex-direction: column;
  color: #484848;
  word-wrap: break-word;
`;

export const ItemType = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
`;

export const ItemName = styled.h1`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.125em;
  padding: 6px 0;
  margin: 0;
  word-wrap: break-word;
`;

export const ItemPriceWithUnit = styled.span`
  word-wrap: break-word;
  margin-top: 16px;
`;

export const ItemPrice = styled.span`
  font-size: 22px;
  font-weight: 800;
`;

export const ItemUnit = styled.span`
  font-size: 12px;
`;

const GeneralText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
  margin-top: 16px;
  word-wrap: break-word;
`;

export const ShareDuration = styled(GeneralText)``;

export const SharePeriod = styled(GeneralText)``;

export const ItemStatus = styled(GeneralText)``;
