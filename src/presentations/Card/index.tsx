import React from 'react';

import * as S from './styles';

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
    <S.CardContainer>
      <S.CardImage src={imageSrc} />
      <S.ContentContainer>
        <S.ItemType>{isPublic ? '공용물품' : '개인물품'}</S.ItemType>
        <S.ItemName>{itemName}</S.ItemName>
        <S.ItemPrice>{`${itemPrice}원/회`}</S.ItemPrice>
        <S.DateDescriptionContainer>
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
        </S.DateDescriptionContainer>
      </S.ContentContainer>
    </S.CardContainer>
  );
};
