import React, { FC } from 'react';
import * as S from './styles';
import { Card } from '..';

interface CardItem {
  imageSrc: string;
  isPublic: boolean;
  itemName: string;

  itemPrice: number;
  itemId: string;
  startDate?: Date;
  endDate?: Date;
  currentDate?: Date;
}

interface CardListProps {
  type: 'purchase' | 'sale' | 'rental' | 'share';
  cardItems: CardItem[];
}

export const CardList: FC<CardListProps> = ({ cardItems, type }) => {
  const wrappedCardItems = cardItems.map(item => (
    <S.CardLink key={item.itemId} to={`${type}/${item.itemId}`}>
      <Card {...item} />
    </S.CardLink>
  ));

  return <S.CardList>{wrappedCardItems}</S.CardList>;
};
