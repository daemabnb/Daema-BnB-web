import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ListItemImage = styled.img`
  width: 80px;
  height: 100%;
`;

export const ListItemDescrition = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
`;

export const ListItemDescritionLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItemParagraph = styled.span`
  font-size: 14px;
`;

export const ListItemName = styled(ListItemParagraph)``;

export const ListItemOwner = styled(ListItemParagraph)``;

export const ListItemDateDescription = styled(ListItemParagraph)`
  color: #484848;
  margin-left: 10px;
`;
