import styled from 'styled-components';

export const Card = styled.div`
  height: calc(30vw + 50px);
  display: flex;
  flex-direction: column;
  padding: 8px 6px 12px;
  box-sizing: border-box;
`;

interface CardImageProps {
  src: string;
}

export const CardImage = styled.div`
  flex: 1;
  background-image: url(${(props: CardImageProps) => props.src});
  background-color: #f0f0f0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  border-radius: 3px;
`;

export const Content = styled.div`
  padding-top: 6;
`;

const Description = styled.p`
  color: #484848;
  margin: 0;
  margin-top: 4px;
  font-size: 14px;
`;

export const ItemType = styled.p`
  color: #767676;
  margin: 0;
  margin-top: 4px;
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
  isLate?: boolean;
}

export const DateDescription = styled(Description)`
  color: ${(props: DateProps) => (props.isLate ? '#ff0000' : '#484848')};
  font-weight: 400;
`;

export const PastDateDescription = styled(DateDescription)`
  color: #ff0000;
`;

export const DateDescriptionWrapper = styled.div`
  display: grid;
  margin-top: 4px;
  grid-template-columns: auto auto;
  & > p {
    margin: 0;
  }
`;
