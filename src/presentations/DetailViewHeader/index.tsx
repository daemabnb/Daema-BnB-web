import React from 'react';

import * as S from './style';
import { formatDate } from '../../utils';

interface DetailViewHeaderProps {
  isPublic: boolean;
  itemDealType: 'share' | 'sale';
  itemName: string;
  itemPrice: number;
  isFree: boolean;
  itemStatus: string;
  startDate?: Date;
  returnDate?: Date;
  deedline?: Date;
  period?: number;
}

export const DetailViewHeader: React.FC<DetailViewHeaderProps> = ({
  isPublic,
  itemDealType,
  itemName,
  itemPrice,
  isFree,
  itemStatus,
  startDate,
  returnDate,
  period,
}) => {
  const itemType = isPublic ? '공용물품' : '개인물품';
  const itemPriceText = isFree ? '무료' : `₩${itemPrice}`;
  const dealDuration =
    itemDealType === 'share'
      ? `${startDate && formatDate(startDate)} ~ ${returnDate &&
          formatDate(returnDate)}`
      : null;
  const durationText = dealDuration && (
    <S.ShareDuration>{dealDuration}</S.ShareDuration>
  );
  const periodText = period && (
    <S.SharePeriod>대여 기간: {period}일</S.SharePeriod>
  );
  return (
    <S.DetailViewHeader>
      <S.ItemType>{itemType}</S.ItemType>
      <S.ItemName>{itemName}</S.ItemName>
      <S.ItemStatus>{itemStatus}</S.ItemStatus>
      <S.ItemPriceWithUnit>
        <S.ItemPrice>{itemPriceText}</S.ItemPrice>
        <S.ItemUnit>/회</S.ItemUnit>
      </S.ItemPriceWithUnit>
      {durationText}
      {periodText}
    </S.DetailViewHeader>
  );
};
