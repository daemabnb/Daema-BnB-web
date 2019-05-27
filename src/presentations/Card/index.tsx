import React from 'react';

import { formatDate } from '../../utils';

interface Props {
  imageSrc: string;
  isPublic: boolean;
  itemName: string;
  itemPrice: number;
  itemId: string;
  startDate?: Date;
  endDate?: Date;
  currentDate?: Date;
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
  const currentTime = currentDate ? currentDate.getTime() : Date.now();
  const isLate = endDate ? currentTime < endDate.getTime() : false;
  const startDateDescription = startDate && (
    <S.DateDescription>
      {formatDate(startDate)}
    </S.DateDescription>
  );
  const endDateDescription = endDate && (
    <S.DateDescription isLate={isLate}>{formatDate(endDate)}</S.DateDescription>
  );
  return (
    <S.Card>
      <S.CardImage src={imageSrc} />
      <S.Content>
        <S.ItemType>{isPublic ? '공용물품' : '개인물품'}</S.ItemType>
        <S.ItemName>{itemName}</S.ItemName>
        <S.ItemPrice>{itemPrice}원/회</S.ItemPrice>
        <S.DateDescriptionWrapper>
          {startDateDescription}
          {endDateDescription}
        </S.DateDescriptionWrapper>
      </S.Content>
    </S.Card>
  );
};
