import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 50%;
  display: inline-block;
  padding: 8px 6px 12px;
  box-sizing: border-box;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 66%;
  border-radius: 3px;
`;

export const ContentContainer = styled.div`
  padding-top: 6;
`;

const Description = styled.p`
  color: #484848;
  font-size: 14px;
`;

export const ItemType = styled.p`
  color: #767676;
  font-size: 12px;
  font-weight: 800;
`;

export const ItemName = styled(Description)`
  font-weight: 600;
`;

export const ItemPrice = styled(Description)`
  font-weight: 400;
`;

interface DateProps {
  isLate: boolean;
}

export const DateDescription = styled(Description)`
  color: ${(props: DateProps) => (props.isLate ? '#ff0000' : '#484848')};
  font-weight: 400;
`;

export const PastDateDescription = styled(DateDescription)`
  color: #ff0000;
`;

export const DateDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  & > p {
    margin: 0;
  }
`;
