import React from 'react';

import {
  CardContainer,
  CardImage,
  ContentContainer,
  ItemType,
  ItemName,
  ItemPrice,
  DateDescription,
  DateDescriptionContainer,
} from './styles';

import { formatDate } from '../../utils/formatDate';

interface Props {
  imageSrc: string;
  isPublic: boolean;
  itemName: string;
  itemPrice: number;
  itemId: string;
  startDate?: Date;
  endDate?: Date;
  currentDate: Date;
}

export const Card: React.FC<Props> = ({
  imageSrc,
  isPublic,
  itemName,
  itemPrice,
  startDate,
  endDate,
  currentDate,
  itemId,
}) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} />
      <ContentContainer>
        <ItemType>{isPublic ? '공용물품' : '개인물품'}</ItemType>
        <ItemName>{itemName}</ItemName>
        <ItemPrice>{`${itemPrice}원/회`}</ItemPrice>
        <DateDescriptionContainer>
          {startDate ? (
            <DateDescription isLate={false}>
              {formatDate(startDate)}
            </DateDescription>
          ) : null}
          {endDate ? (
            <DateDescription isLate={currentDate.getTime() < endDate.getTime()}>
              {formatDate(endDate)}
            </DateDescription>
          ) : null}
        </DateDescriptionContainer>
      </ContentContainer>
    </CardContainer>
  );
};
