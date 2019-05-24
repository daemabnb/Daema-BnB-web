import React from 'react';

import * as S from './styles';

import { formatDate } from '../../utils';

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
    <S.Card>
      <S.CardImage src={imageSrc} />
      <S.Content>
        <S.ItemType>{isPublic ? '공용물품' : '개인물품'}</S.ItemType>
        <S.ItemName>{itemName}</S.ItemName>
        <S.ItemPrice>{`${itemPrice}원/회`}</S.ItemPrice>
        <S.DateDescriptionWrapper>
          {startDate ? (
            <S.DateDescription isLate={false}>
              {formatDate(startDate)}
            </S.DateDescription>
          ) : null}
          {endDate ? (
            <S.DateDescription
              isLate={currentDate.getTime() < endDate.getTime()}
            >
              {formatDate(endDate)}
            </S.DateDescription>
          ) : null}
        </S.DateDescriptionWrapper>
      </S.Content>
    </S.Card>
  );
};
